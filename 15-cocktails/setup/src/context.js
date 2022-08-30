import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [cocktails, setCocktails] = useState([]);

	const fetchCocktails = async () => {
		try {
			const response = await fetch(url + searchTerm);
			const data = await response.json();
			console.log(data.drinks, "data.drinks");
			setCocktails(data.drinks);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchCocktails();
	}, [searchTerm]);

	return (
		<AppContext.Provider
			value={{
				loading,
				cocktails,
				setSearchTerm,
				setCocktails,
				setLoading,
				fetchCocktails,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
