import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
	const { value, setValue, error } = useGlobalContext();
	return (
		<form className="search-form" onSubmit={(e) => e.preventDefault()}>
			<h2>search movies</h2>
			<input
				type="text"
				className="form-input"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			{error.show && <div className="error">{error.msg}</div>}
		</form>
	);
};

export default SearchForm;
