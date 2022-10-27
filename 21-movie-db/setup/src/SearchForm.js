import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
	const { value, setValue } = useGlobalContext();
	return (
		<form className="search-form">
			<h2>search movies</h2>
			<input
				type="text"
				className="form-input"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
