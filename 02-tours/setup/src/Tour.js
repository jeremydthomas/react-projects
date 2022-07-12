import React, { useState } from "react";

const Tour = ({ id, image, price, info, name }) => {
	return (
		<article className="single-tour">
			<img src={image} alt={name}></img>
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">
						<span>${price}</span>
					</h4>
				</div>
				<p>
					{info}
					<button>read more</button>
				</p>
				<button className="delete-btn">not interested</button>
			</footer>
		</article>
	);
};

export default Tour;
