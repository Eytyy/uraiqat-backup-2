import { combineReducers } from 'redux';

const All = (state = {
	results: {},
	filters: [],
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
	case 'RECIEVE_FILTERS':  //eslint-disable-line
		const filters = action.response.map(({ sys, fields }) => ({
			title: fields.title,
			id: sys.id
		}));
		return {
			...state,
			filters,
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

export const getFilters = (state) => state.All.filters;

export default search;
