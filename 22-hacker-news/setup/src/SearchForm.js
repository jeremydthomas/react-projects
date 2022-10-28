import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
	const { value, handleChange } = useGlobalContext();
	console.log(value);
	return (
		<form className="search-form" onSubmit={(e) => e.preventDefault()}>
			<h2>search hacker news</h2>
			<input
				type="text"
				className="form-input"
				value={value}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
