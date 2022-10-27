import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch.js";

const SingleMovie = () => {
	const { id } = useParams();
	const { isLoading, error, movieData } = useFetch(`&i=${id}`);
	if (isLoading) {
		return <div className="loading"></div>;
	}

	if (error.show) {
		return (
			<div className="error">
				<div className="page-error">
					<h1>{error.msg}</h1>
					<Link to="/" className="btn">
						back to movies
					</Link>
				</div>
			</div>
		);
	}

	return (
		<section className="single-movie">
			<img src={movieData.Poster} alt={movieData.Title} />
			<div className="single-movie-info">
				<h2>{movieData.Title}</h2>
				<p>{movieData.Plot}</p>
				<h4>{movieData.Year}</h4>
				<Link className="btn" to="/">
					back to movies
				</Link>
			</div>
		</section>
	);
};

export default SingleMovie;
