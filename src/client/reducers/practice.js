import { combineReducers } from 'redux';

const All = (state = {
	content: {},
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_PRACTICE':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_PRACTICE': //eslint-disable-line
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

const Team = (state = {
	content: [],
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_TEAMMEMBER':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_TEAMMEMBER': //eslint-disable-line
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

const TeamByID = (state = {
	content: [],
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_TEAMMEMBER':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_TEAMMEMBER': //eslint-disable-line
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
		return state;
	default:
		return state;
	}	
};

const Career = (state = {
	content: [],
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_CAREER':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_CAREER': //eslint-disable-line
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

const CareerByID = (state = {
	content: [],
	isFetching: false,
}, action) => {
	switch (action.type) {
	case 'REQUEST_CAREER':
		return {
			...state,
			isFetching: true,
		};
	case 'RECIEVE_CAREER': //eslint-disable-line
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
		return state;
	default:
		return state;
	}	
};

const practice = combineReducers({
	All,
	Team,
	TeamByID,
	Career,
	CareerByID
});

export const getIsFetching = state => state.All.isFetching;

export const getContent = state => state.All.content;

export const getIsTeamMemberFetching = state => state.Team.isFetching;

export const getTeamMembers = state => state.Team.content;

export const getTeamMember = (state, id) => state.TeamByID[id];

export const getIsCareerFetching = state => state.Career.isFetching;

export const getCareers = state => state.Career.content;

export const getCareer = (state, id) => state.CareerByID[id];

export default practice;