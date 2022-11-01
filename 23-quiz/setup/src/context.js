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
	const [waiting, setWaiting] = useState(true);
	const [questions, setQuestions] = useState([]);
	const [value, setValue] = useState(10);
	const [index, setIndex] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [error, setError] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const fetchData = async (url) => {
		setLoading(true);
		setWaiting(false);
		try {
			const response = await axios(url).catch((err) => console.log(err));
			if (response) {
				const data = response.data.results;
				if (data.length > 0) {
					setQuestions(data);
					setLoading(false);
					setWaiting(false);
					setError(false);
				} else {
					setWaiting(true);
					setError(true);
				}
			} else {
				setWaiting(true);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const nextQuestion = () => {
		setIndex((oldIndex) => {
			const index = oldIndex + 1;
			if (index > questions.length - 1) {
				openModal();
				return 0;
			} else {
				return index;
			}
		});
	};

	const checkAnswer = (value) => {
		if (value) {
			setCorrect((oldCorrect) => {
				return oldCorrect + 1;
			});
		}
		nextQuestion();
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	useEffect(() => {
		fetchData(tempUrl);
	}, []);

	return (
		<AppContext.Provider
			value={{
				questions,
				loading,
				value,
				setValue,
				waiting,
				correct,
				error,
				isModalOpen,
				index,
				nextQuestion,
				checkAnswer,
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
