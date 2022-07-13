import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const Question = (question) => {
	const [open, setOpen] = useState(false);
	const { title, info } = question;
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn" onClick={() => setOpen(!open)}>
					{open ? <BiMinus /> : <BiPlus />}
				</button>
			</header>
			{open ? <p>{info}</p> : ""}
		</article>
	);
};

export default Question;
