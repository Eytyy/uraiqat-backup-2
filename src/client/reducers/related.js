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
		const content = [...state.content, action.projectID];
		return {
			...state,
			content,
			isFetching: false
		};
	default:
		return state;
	}
};

const AuthorRelated = (state = {
	content: [],
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_AUTHOR_RELATED':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_AUTHOR_RELATED': //eslint-disable-line
		const content = [...state.content, action.authorName];
		return {
			...state,
			content,
			isFetching: false
		};
	default:
		return state;
	}
};


const ByAuthorName = (state = {
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_AUTHOR_RELATED':
		return {
			...state,
			isFetching: true,
		};

	case 'RECIEVE_AUTHOR_RELATED': //eslint-disable-line
		const names = {};
		names[action.authorName] = action.response;
		return {
			...state,
			...names,
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
	case 'REQUEST_RELATED':
		return {
			...state,
			isFetching: true,
		};

	case 'RECIEVE_RELATED': //eslint-disable-line
		const ids = {};
		ids[action.projectID] = action.response;
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
	AuthorRelated,
	ByAuthorName
});

export const getIsFetching = state => state.All.isFetching;

export const getAll = state => state.All.content;

export const getPost = (state, id) => state.ById[id];

export const getIsAuthorFetching = state => state.AuthorRelated.isFetching;

export const getAuthorAll = state => state.AuthorRelated.content;

export const getAuthorPost = (state, name) => state.ByAuthorName[name];

export default related;
