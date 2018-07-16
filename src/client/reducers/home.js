import { combineReducers } from 'redux';

const BySection = (state = {
	main: [],
	featured: [],
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_POSTS':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_POSTS': //eslint-disable-line
		const main = typeof action.response[0].fields.mainContent !== 'undefined'?
			action.response[0].fields.mainContent
				.filter(({ fields }) => typeof fields !== 'undefined')
				.map(({ sys }) => sys.id) : [];
		const featured = typeof action.response[0].fields.featuredContent !== 'undefined'?
			action.response[0].fields.featuredContent
				.filter(({ fields }) => typeof fields !== 'undefined')
				.map(({ sys }) => sys.id) : [];
		return {
			...state,
			isFetching: false,
			main,
			featured,
		};
	default:
		return state;
	}
};

const All = (state = {
	content: [],
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_POSTS':
	case 'REQUEST_POST':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_POSTS': //eslint-disable-line
		const main = typeof action.response[0].fields.mainContent !== 'undefined' ?
			action.response[0].fields.mainContent
				.filter(({ fields }) => typeof fields !== 'undefined')
				.map(({ sys }) => sys.id) :
			[];
		const featured = typeof action.response[0].fields.featuredContent !== 'undefined' ? 
			action.response[0].fields.featuredContent
				.filter(({ fields }) => typeof fields !== 'undefined')
				.map(({ sys }) => sys.id) :
			[];
		const ids = main.concat(featured);
		return {
			...state,
			content: ids,
			isFetching: false,
			fetchedAll: true,
		};
	case 'RECIEVE_POST': //eslint-disable-line
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
	case 'REQUEST_POSTS':
	case 'REQUEST_POST':
		return {
			...state,
			isFetching: true,
		};

	case 'RECIEVE_POSTS': //eslint-disable-line
		const ids = {};
		action.response[0].fields.mainContent && action.response[0].fields.mainContent
			.filter(({ fields }) => typeof fields !== 'undefined')
			.forEach(({ fields, sys }) => {
				ids[sys.id] = {
					id: sys.id,
					...fields,
				};
			});
		action.response[0].fields.featuredContent &&	action.response[0].fields.featuredContent
			.filter(({ fields }) => typeof fields !== 'undefined')
			.forEach(({ fields, sys }) => {
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
	case 'RECIEVE_POST': //eslint-disable-line
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

const home = combineReducers({
	All,
	BySection,
	ById,
});

export const getIsFetching = state => state.All.isFetching;

export const getAll = state => {
	return {
		mainContent: state.BySection.main,
		featuredContent: state.BySection.featured,
	};
};

export const getPost = (state, id) => state.ById[id];

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

export default home;
