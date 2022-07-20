import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ weight, rgb, index, hexColor }) => {
	const [alert, setAlert] = useState(false);
	// const [hex, setHex] = useState("");
	// const bcg = rgb.join(",");
	const hexValue = `#${hexColor}`;
	// const hex = rgbToHex(...rgb);
	// console.log(bcg);
	// const r = rgb[0];
	// const g = rgb[1];
	// const b = rgb[2];

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [alert]);

	return (
		<article
			style={{ backgroundColor: `rgb(${rgb}` }}
			className={index <= 10 ? "color" : "color-light"}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
			}}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexValue}</p>
			{alert && <p className="alert">copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
