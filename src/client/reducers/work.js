import { combineReducers } from 'redux';

const All = (state = {
	content: [],
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_PROJECTS':
	case 'REQUEST_PROJECT':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_PROJECTS': //eslint-disable-line
		const ids = action.response.map(({ sys }) => sys.id);
		return {
			...state,
			content: ids,
			isFetching: false,
			fetchedAll: true,
		};
	case 'RECIEVE_PROJECT': //eslint-disable-line
		const newContent = state.content;
		if (newContent.length === 0) {
			newContent.push(action.response.sys.id);
		}
		return {
			...state,
			content: newContent,
			isFetching: false,
		};
	default:
		return state;
	}
};

const ById = (state = {
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_PROJECTS':
	case 'REQUEST_PROJECT':
		return {
			...state,
			isFetching: true,
		};

	case 'RECIEVE_PROJECTS': //eslint-disable-line
		const ids = {};
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
	case 'RECIEVE_PROJECT': //eslint-disable-line
		const contentId = action.response.sys.id;
		const fields = action.response.fields;
		if (typeof state[contentId] === 'undefined') {
			return {
				...state,
				[contentId]: {
					id: contentId,
					...fields,
				},
				isFetching: false,
			};
		}
		return {
			...state,
			isFetching: false,
		};
	default:
		return state;
	}
};


const work = combineReducers({
	All,
	ById,
});

export const getIsFetching = state => state.All.isFetching;

export const getAll = state => state.All.content;

export const getProject = (state, id) => state.ById[id];

export default work;
