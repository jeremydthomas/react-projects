import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [value, setValue] = useState("batman");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState({ show: false, msg: "" });
	const [movieData, setMovieData] = useState([]);

	const fetchData = async (url) => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();

			if (data.Response === "True") {
				setMovieData(data.Search);
				setError({ show: false, msg: "" });
			} else {
				setError({ show: true, msg: data.error });
			}
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData(`${API_ENDPOINT}&s=${value}`);
	}, [value]);

	return (
		<AppContext.Provider
			value={{ movieData, value, setValue, isLoading, error }}
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
