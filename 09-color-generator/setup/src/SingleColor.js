import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ weight, rgb, index, tint }) => {
	const [hex, setHex] = useState("");
	const r = rgb[0];
	const g = rgb[1];
	const b = rgb[2];

	useEffect(() => {
		setHex(rgbToHex(r, g, b));
	}, [r, g, b]);

	console.log(r, g, b, weight, index);
	return (
		<article
			key={index}
			style={{ backgroundColor: `rgb(${rgb}` }}
			className={index <= 10 ? "color" : "color-light"}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hex}</p>
		</article>
	);
};

export default SingleColor;
