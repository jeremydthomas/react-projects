import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
	const [loading, setLoading] = useState(false);
	const [pics, setPics] = useState([]);
	const [value, setValue] = useState("");
	const [page, setPage] = useState(0);

	const getPics = async () => {
		setLoading(true);
		let url;
		const urlPage = `&page=${page}`;
		const urlQuery = `&query=${value}`;

		if (value) {
			url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
		} else {
			url = `${mainUrl}${clientID}${urlPage}`;
		}

		try {
			const response = await fetch(url);
			const data = await response.json();

			setPics((oldPics) => {
				if (value && page === 1) {
					return data.results;
				} else if (value) {
					const { results } = data;
					return [...oldPics, ...results];
				} else {
					return [...oldPics, ...data];
				}
			});
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getPics();
	}, [page]);

	useEffect(() => {
		const event = window.addEventListener("scroll", () => {
			const innerHeight = window.innerHeight;
			const scrollY = window.scrollY;
			const bodyHeight = document.body.scrollHeight;
			if (!loading && innerHeight + scrollY >= bodyHeight - 3) {
				setPage((oldPage) => {
					return oldPage + 1;
				});
			}
		});
		return () => window.removeEventListener("scroll", event);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setPage(1);
	};

	return (
		<main>
			<section className="search">
				<form className="search-form">
					<input
						type="text"
						value={value}
						className="form-input"
						placeholder="search"
						onChange={(e) => setValue(e.target.value)}
					/>
					<button type="submit" className="submit-btn" onClick={handleSubmit}>
						<FaSearch />
					</button>
				</form>
			</section>

			<section className="photos">
				<div className="photos-center">
					{pics.map((pic) => {
						return <Photo key={pic.id} {...pic} />;
					})}
				</div>
				{loading && <h2 className="loading"> Loading.....</h2>}
			</section>
		</main>
	);
}

export default App;
