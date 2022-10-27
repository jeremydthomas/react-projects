import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const SingleMovie = () => {
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [movie, setMovie] = useState("");

	const fetchData = async (url) => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			setMovie(data);
			// if (data.Response === "True") {
			// 	setMovieData(data.Search);
			// 	setError({ show: false, msg: "" });
			// } else {
			// 	setError({ show: true, msg: data.error });
			// }
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData(`${API_ENDPOINT}i=${params.id}`);
		console.log();
	}, []);

	return (
		<section className="single-movie">
			<img src={movie.Poster} alt={movie.Title} />
			<div className="single-movie-info">
				<h2>{movie.Title}</h2>
				<p>{movie.Plot}</p>
				<h4>{movie.Year}</h4>
				<Link className="btn" to="/">
					back to movies
				</Link>
			</div>
		</section>
	);
};

export default SingleMovie;
