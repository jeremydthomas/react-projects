import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, setIndex] = useState(0);
	const { name, job, text, image } = people[index];

	const prev = () => {
		setIndex((index) => (index === 0 ? people.length - 1 : index - 1));
	};

	const next = () => {
		setIndex((index) => (index === people.length - 1 ? 0 : index + 1));
	};

	const random = () => {
		let randomNumber = Math.floor(Math.random() * people.length);
		console.log(index, randomNumber);
		if (randomNumber === index) {
			setIndex(randomNumber + 1);
		} else {
			setIndex(randomNumber);
		}
	};

	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container">
				<button className="prev-btn" onClick={() => prev()}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={() => next()}>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn" onClick={() => random()}>
				surprise me
			</button>
		</article>
	);
};

export default Review;
