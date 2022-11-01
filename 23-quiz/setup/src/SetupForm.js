import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
	const { questions, value, setValue } = useGlobalContext();
	console.log(questions);
	const { category, difficulty, question, type } = questions;
	return (
		<section className="quiz quiz-small">
			<form className="setup-form">
				<h2>setup quiz</h2>
				<div className="form-control">
					<label htmlFor="amount">number of questions</label>
					<input
						type="number"
						name="amount"
						id="amount"
						className="form-input"
						min={1}
						max={50}
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor={category}>category</label>
					<select name="category" id="category" className="form-input">
						<option value="sports">sports</option>
						<option value="history">history</option>
						<option value="politics">politics</option>
					</select>
				</div>
				<div className="form-control">
					<label htmlFor="difficulty">select difficulty</label>
					<select name="difficulty" id="difficulty" className="form-input">
						<option value="easy">easy</option>
						<option value="medium">medium</option>
						<option value="hard">hard</option>
					</select>
				</div>
				<button className="submit-btn" type="submit">
					start
				</button>
			</form>
		</section>
	);
};

export default SetupForm;
