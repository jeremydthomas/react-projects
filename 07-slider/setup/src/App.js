import React, { useState, useEffect } from "react";
import Review from "./Review";
import data from "./data";
import Reviews from "./Reviews";

function App() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);
	// const prev = () => {
	// 	setIndex((index) => (index === 0 ? people.length - 1 : index - 1));
	// };

	// const next = () => {
	// 	setIndex((index) => (index === people.length - 1 ? 0 : index + 1));
	// };

	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((index) => (index === people.length - 1 ? 0 : index + 1));
		}, 3000);
		return () => clearInterval(interval);
	}, [index, people]);

	return (
		<section className="section">
			<Reviews />
			<Review people={people} index={index} setIndex={setIndex} />
		</section>
	);
}

export default App;
