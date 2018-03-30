import { combineReducers } from 'redux';

const All = (state = {
	results: {},
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_SEARCH':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_SEARCH': //eslint-disable-line
		return {
			...state,
			results: {
				...state.results,
				[action.query]: [...action.response],
			},
			isFetching: false,
		};
	default:
		return state;
	}
};

const search = combineReducers({
	All,
});

export const getIsFetching = state => state.All.isFetching;

export const getAll = (state, query) => state.All.results[query];

export default search;
