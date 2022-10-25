import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
	const [loading, setLoading] = useState(false);
	const [pics, setPics] = useState([]);
	const [value, setValue] = useState("");
	const [page, setPage] = useState(1);
	const [newImages, setNewImages] = useState(false);
	const mounted = useRef(false);

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
			setNewImages(false);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setLoading(false);
		}
	};

	useEffect(() => {
		getPics();
	}, [page]);

	useEffect(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}
		if (!newImages) return;
		if (loading) return;
		setPage((oldPage) => oldPage + 1);
	}, [newImages]);

	const event = () => {
		if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 3) {
			setNewImages(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", event);

		return () => {
			window.removeEventListener("scroll", event);
		};
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		if (page === 1) {
			getPics();
			return;
		}
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
