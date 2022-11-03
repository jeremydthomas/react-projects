import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
	const { value, handleChange, handleSubmit, error } = useGlobalContext();

	return (
		<main>
			<section className="quiz quiz-small">
				<form className="setup-form">
					<h2>setup quiz</h2>
					{/* amount */}
					<div className="form-control">
						<label htmlFor="amount">number of questions</label>
						<input
							type="number"
							name="amount"
							id="amount"
							className="form-input"
							min={1}
							max={50}
							value={value.amount}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					{error && (
						<package className="error">
							cant generate questions, please try again
						</package>
					)}
					{/* category */}
					<div className="form-control">
						<label htmlFor="category">category</label>
						<select
							name="category"
							id="category"
							className="form-input"
							value={value.category}
							onChange={(e) => handleChange(e)}
						>
							<option value="sports">sports</option>
							<option value="history">history</option>
							<option value="politics">politics</option>
						</select>
					</div>
					{/* difficulty */}
					<div className="form-control">
						<label htmlFor="difficulty">select difficulty</label>
						<select
							name="difficulty"
							id="difficulty"
							className="form-input"
							value={value.category}
							onChange={(e) => handleChange(e)}
						>
							<option value="easy">easy</option>
							<option value="medium">medium</option>
							<option value="hard">hard</option>
						</select>
					</div>
					{error && (
						<p className="error">
							cant generate questions, please try different options
						</p>
					)}
					<button
						className="submit-btn"
						type="submit"
						onClick={(e) => handleSubmit(e)}
					>
						start
					</button>
				</form>
			</section>
		</main>
	);
};

export default SetupForm;
