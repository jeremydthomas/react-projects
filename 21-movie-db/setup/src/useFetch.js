import { useState, useEffect } from "react";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState({ show: false, msg: "" });
	const [movieData, setMovieData] = useState([]);

	const fetchData = async (url) => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data.Response === "True") {
				setMovieData(data.Search || data);
				setError({ show: false, msg: "" });
			} else {
				setError({ show: true, msg: data.Error });
			}
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData(`${API_ENDPOINT}&s=${urlParams}`);
	}, [urlParams]);

	return { movieData, error, isLoading };
};
export default useFetch;
