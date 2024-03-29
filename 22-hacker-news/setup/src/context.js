import React, { useContext, useEffect, useReducer } from "react";

import {
	SET_LOADING,
	SET_STORIES,
	REMOVE_STORY,
	HANDLE_PAGE,
	HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
	isLoading: true,
	value: "react",
	hits: [],
	page: 0,
	nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchStories = async (url) => {
		dispatch({ type: SET_LOADING });
		try {
			const response = await fetch(url);
			const data = await response.json();

			dispatch({
				type: SET_STORIES,
				payload: { hits: data.hits, nbPages: data.nbPages },
			});
		} catch (error) {
			console.log(error);
		}
	};

	const removeStory = (id) => {
		dispatch({
			type: REMOVE_STORY,
			payload: id,
		});
	};

	const handleChange = (value) => {
		dispatch({ type: HANDLE_SEARCH, payload: value });
	};

	const handlePage = (value) => {
		dispatch({ type: HANDLE_PAGE, payload: value });
	};

	useEffect(() => {
		fetchStories(`${API_ENDPOINT}query=${state.value}&page=${state.page}`);
	}, [state.value, state.page]);

	return (
		<AppContext.Provider
			value={{ ...state, removeStory, handleChange, handlePage }}
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
