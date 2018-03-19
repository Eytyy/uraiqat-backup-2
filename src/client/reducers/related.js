import { combineReducers } from 'redux';

const All = (state = {
	content: [],
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_RELATED':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_RELATED': //eslint-disable-line
		const ids = action.response.map(({ sys }) => sys.id);
		return {
			...state,
			content: ids,
			isFetching: false,
			fetchedAll: true,
		};
	default:
		return state;
	}
};

const ById = (state = {
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_RELATED':
		return {
			...state,
			isFetching: true,
		};

	case 'RECIEVE_RELATED': //eslint-disable-line
		const ids = action.response.map(({ sys }) => sys.id);
		action.response.forEach(({ fields, sys }) => {
			ids[sys.id] = {
				id: sys.id,
				...fields,
			};
		});
		return {
			...state,
			...ids,
			isFetching: false,
		};
	default:
		return state;
	}
};

const related = combineReducers({
	All,
	ById,
});

export const getIsFetching = state => state.All.isFetching;

export const getAll = state => state.All.content;

export const getPost = (state, id) => state.ById[id];

export default related;
