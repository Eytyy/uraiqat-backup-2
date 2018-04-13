import { combineReducers } from 'redux';

const All = (state = {
	content: {},
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_CONTACT':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_CONTACT': //eslint-disable-line
		return {
			...state,
			content: {
				...state.content,
				...action.response
			},
			isFetching: false,
		};
	default:
		return state;
	}	
};

const Contact = combineReducers({
	All,
});

export const getIsFetching = state => state.All.isFetching;

export const getContent = state => state.All.content;

export default Contact;