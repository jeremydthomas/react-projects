import {
	SET_LOADING,
	SET_STORIES,
	REMOVE_STORY,
	HANDLE_PAGE,
	HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, isLoading: true };
		case SET_STORIES:
			return {
				...state,
				isLoading: false,
				hits: action.payload.hits,
				nbPages: action.payload.nbPages,
			};
		case REMOVE_STORY:
			return {
				...state,
				hits: state.hits.filter((items) => items.objectID !== action.payload),
			};
		case HANDLE_SEARCH:
			return { ...state, value: action.payload, page: 0 };
			break;

		default:
			throw new Error(`no matching "${action.type}" action type`);
			break;
	}
};
export default reducer;
