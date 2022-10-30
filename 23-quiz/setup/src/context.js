import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
	sports: 21,
	history: 23,
	politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const tempUrl =
	"https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [value, setValue] = useState(10);

	const fetchData = async (url) => {
		setLoading(true);

		try {
			const response = await fetch(tempUrl);
			const data = await response.json();
			console.log(data);
			setQuestions(data.results);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider value={{ questions, loading, value, setValue }}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
