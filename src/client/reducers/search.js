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
			id: sys.id,
			active: false,
		}));
		return {
			...state,
			filters,
		};
	case 'UPDATE_FILTER':  //eslint-disable-line
		const updatedFilters = state.filters;
		const filter = updatedFilters.find(({ id }) => id === action.response.id);
		filter.active = !filter.active;
		return {
			...state,
			filters: [
				...updatedFilters
			]
		};
	case 'CLEAR_FILTERS':  //eslint-disable-line
		const newFilters = state.filters.map(filter => ({
			...filter,
			active: false,
		}));
		return {
			...state,
			filters: [
				...newFilters
			]
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

export const getActiveFilters = (state) => state.All.filters.filter(({ active }) => active);

export default search;
