import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
	console.log(cocktail);
	const {
		strDrinkThumb: img,
		strDrink: name,
		strGlass: glass,
		strAlcoholic: alcohol,
		idDrink: id,
	} = cocktail;
	return (
		<article className="cocktail">
			<div className="img-container">
				<img src={img} alt={name} />
			</div>
			<div className="cocktail-footer">
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p>{alcohol}</p>
				<Link className="btn btn-primary btn-details" to={`/cocktail/${id}`}>
					details
				</Link>
			</div>
		</article>
	);
};

export default Cocktail;
