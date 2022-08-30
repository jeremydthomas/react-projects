import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [cocktails, setCocktails] = useState([]);

	const fetchCocktails = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			const { drinks } = data;
			if (drinks) {
				const newCocktails = drinks.map((item) => {
					const { strDrinkThumb, strDrink, strGlass, strAlcoholic, idDrink } =
						item;
					return {
						id: idDrink,
						name: strDrink,
						glass: strGlass,
						alcohol: strAlcoholic,
						id: idDrink,
						img: strDrinkThumb,
					};
				});
				setCocktails(newCocktails);
			} else {
				setCocktails([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	});
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
