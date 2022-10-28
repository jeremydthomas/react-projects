import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
	const { dispatch, ...state } = useGlobalContext();
	const { value } = state;
	return (
		<form className="search-form">
			<h2>search hacker news</h2>
			<input
				type="text"
				className="form-input"
				value={value}
				onChange={(e) => {
					dispatch({ loading: false, value: e.target.value });
				}}
			/>
		</form>
	);
};

export default SearchForm;
