import { combineReducers } from 'redux';

const All = (state = {
	intro: {},
	content: [],
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_ATELIER_PROJECTS':
	case 'REQUEST_ATELIER_PROJECT':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_ATELIER_PROJECTS': //eslint-disable-line
		const main = typeof action.response[0].fields.mainContent !== 'undefined' ?
			action.response[0].fields.mainContent
				.filter(({ fields }) => typeof fields !== 'undefined')
				.map(({ sys }) => sys.id) :
			[];
		const intro = {
			desc: action.response[0].fields.description,
			mainMedia: action.response[0].fields.mainMedia,
		};
		return {
			...state,
			intro,
			content: main,
			isFetching: false,
			fetchedAll: true,
		};
	case 'RECIEVE_ATELIER_PROJECT': //eslint-disable-line
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
	case 'REQUEST_ATELIER_PROJECTS':
	case 'REQUEST_ATELIER_PROJECT':
		return {
			...state,
			isFetching: true,
		};

	case 'RECIEVE_ATELIER_PROJECTS': //eslint-disable-line
		const ids = {};
		action.response[0].fields.mainContent && action.response[0].fields.mainContent.forEach(({ fields, sys }) => {
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
	case 'RECIEVE_ATELIER_PROJECT': //eslint-disable-line
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


const atelier = combineReducers({
	All,
	ById,
});

export const getIsFetching = state => state.All.isFetching;

export const getAll = state =>state.All.content;

export const getProject = (state, id) => {
	return state.ById[id];
};

export const getIntro  = state => state.All.intro;

export const getNextPrev = (state, id) => {
	const content = state.All.content;
	const currentIndex = content.findIndex((item) => item === id);
	const nextItemIndex = currentIndex === content.length - 1 ? 0 : currentIndex + 1;
	const prevItemIndex = currentIndex === 0 ? content.length - 1 : currentIndex - 1;
	return {
		next: state.ById[content[nextItemIndex]],
		prev: state.ById[content[prevItemIndex]],
	};
};

export default atelier;