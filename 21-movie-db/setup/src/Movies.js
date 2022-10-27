import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
	"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
	const { movieData } = useGlobalContext();

	return (
		<section className="movies">
			{movieData.map((items) => {
				return (
					<Link
						key={items.imdbID}
						className="movie"
						to={`movies/${items.imdbID}`}
					>
						<article>
							<img src={items.Poster || url} alt={items.Title} />
							<div className="movie-info">
								<h4 className="title">{items.Title}</h4>
								<p>{items.Year}</p>
							</div>
						</article>
					</Link>
				);
			})}
		</section>
	);
};

export default Movies;
