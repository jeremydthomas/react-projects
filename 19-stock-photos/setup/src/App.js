import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
	const [loading, setLoading] = useState(true);
	const [pics, setPics] = useState([]);
	const [value, setValue] = useState("");

	const getPics = async () => {
		let url;
		url = `${mainUrl}${clientID}`;
		const response = await fetch(url);
		const data = await response.json();
		setPics(data);
		setLoading(false);
	};

	useEffect(() => {
		getPics();
	}, []);

	useEffect(() => {
		const event = window.addEventListener("scroll", () => {
			const innerHeight = window.innerHeight;
			const scrollY = window.scrollY;
			const bodyHeight = document.body.scrollHeight;
			if (!loading && innerHeight + scrollY >= bodyHeight - 3) {
				console.log("dingding");
			}
		});
		return () => window.removeEventListener("scroll", event);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const searchPics = async () => {
			let url;
			url = `${searchUrl}${clientID}?page=2&query=${value}`;
			const response = await fetch(url);
			const data = await response.json();
			const { results } = data;
			setPics(results);
			setLoading(false);
		};
		searchPics();
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
