import axios from "axios";
import React, { useState, useContext } from "react";

const table = {
	sports: 21,
	history: 23,
	politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [waiting, setWaiting] = useState(true);
	const [questions, setQuestions] = useState([]);
	const [value, setValue] = useState({
		amount: 10,
		category: "sports",
		difficulty: "easy",
	});
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

	const closeModal = () => {
		setWaiting(true);
		setCorrect(0);
		setIsModalOpen(false);
	};

	const handleChange = (e) => {
		const name = e.target.name;
		console.log(name, value);
		setValue({ ...value, [name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `${API_ENDPOINT}amount=${value.amount}&category=${
			table[value.category]
		}&difficulty=${value.difficulty}&type=multiple`;
		fetchData(url);
	};

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
				closeModal,
				handleChange,
				handleSubmit,
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
