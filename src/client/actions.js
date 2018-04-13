import {
	getIsClientLoading,
	isPostsFetching,
	isPostFetching,
	isProjectsFetching,
	isProjectFetching,
	isAtelierProjectsFetching,
	isAtelierProjectFetching,
	isRelatedFetching, 
	isSearchFetching,
	isPracticeFetching,
	isTeamMemberFetching,
	isRelatedAuthorPostsFetching,
	isCareerFetching,
	isContactFetching
} from './reducers';

import * as api from './api';

// App Action Creators
const requestClient = () => {
	return {
		type: 'INIT_CLIENT',
	};
};

const recieveClient = (authState) => {
	return {
		type: 'LOADED_CLIENT',
		authState,
	};
};

export const initClient = () => (dispatch, getState) => {
	const state = getState();
	dispatch(requestClient());
	if (getIsClientLoading(state)) {
		return Promise.resolve();
	}
	return api.setupClient().then((response) => {
		return response;
	}).then(response => {
		dispatch(recieveClient(response));
	});
};


// Journal Action Creators
const requestPosts = () => ({
	type: 'REQUEST_POSTS'
});

const recievePosts = payload => ({
	type: 'RECIEVE_POSTS',
	response: payload,
});

const requestPost = () => ({
	type: 'REQUEST_POST'
});

const recievePost = payload => ({
	type: 'RECIEVE_POST',
	response: payload,
});

export const fetchPosts = () => (dispatch, getState) => {
	const state = getState();
	dispatch(requestPosts());
	if (isPostsFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchPosts().then((response) => {
		return response;
	}).then(response => {
		dispatch(recievePosts(response));
	});
};

export const fetchPost = (id) => (dispatch, getState) => {
	const state = getState();
	dispatch(requestPost());
	if (isPostFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchPost(id).then((response) => {
		dispatch(recievePost(response));
	});
};


// Work Action Creators
const requestProjects = () => ({
	type: 'REQUEST_PROJECTS'
});

const recieveProjects = payload => ({
	type: 'RECIEVE_PROJECTS',
	response: payload,
});

const requestProject = () => ({
	type: 'REQUEST_PROJECT'
});

const recieveProject = payload => ({
	type: 'RECIEVE_PROJECT',
	response: payload,
});

export const fetchProjects = () => (dispatch, getState) => {
	const state = getState();
	dispatch(requestProjects());
	if (isProjectsFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchProjects().then((response) => {
		return response;
	}).then(response => {
		dispatch(recieveProjects(response));
	});
};

export const fetchProject = (id) => (dispatch, getState) => {
	const state = getState();
	dispatch(requestProject());
	if (isProjectFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchProject(id).then((response) => {
		dispatch(recieveProject(response));
	});
};

// Atelier Action Creators

const requestAtelierProjects = () => ({
	type: 'REQUEST_ATELIER_PROJECTS'
});

const recieveAtelierProjects = payload => ({
	type: 'RECIEVE_ATELIER_PROJECTS',
	response: payload,
});

const requestAtelierProject = () => ({
	type: 'REQUEST_ATELIER_PROJECT'
});

const recieveAtelierProject = payload => ({
	type: 'RECIEVE_ATELIER_PROJECT',
	response: payload,
});

export const fetchAtelierProjects = () => (dispatch, getState) => {
	const state = getState();
	dispatch(requestAtelierProjects());
	if (isAtelierProjectsFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchAtelierProjects().then((response) => {
		return response;
	}).then(response => {
		dispatch(recieveAtelierProjects(response));
	});
};

export const fetchAtelierProject = (id) => (dispatch, getState) => {
	const state = getState();
	dispatch(requestAtelierProject());
	if (isAtelierProjectFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchAtelierProject(id).then((response) => {
		dispatch(recieveAtelierProject(response));
	});
};


// Related Action Creators
const requestRelated = () => ({
	type: 'REQUEST_RELATED'
});

const recieveRelated = (payload, id) => ({
	type: 'RECIEVE_RELATED',
	response: payload,
	projectID: id,
});

export const fetchRelated = (id) => (dispatch, getState) => {
	const state = getState();
	dispatch(requestRelated());
	if (isRelatedFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchRelatedPosts(id).then((response) => {
		return response;
	}).then(response => {
		dispatch(recieveRelated(response, id));
	});
};


// Gallery Action Creators
const recieveGalleryContent = (sliderId, content) => ({
	type: 'RECIEVE_GALLERY_CONTENT',
	response: {
		sliderId,
		content,
	}
});

export const updateGallery = (sliderId, content) => (dispatch) =>
	dispatch(recieveGalleryContent(sliderId, content));

const updateSlide = (sliderId, direction) => ({
	type: 'UPDATE_ACTIVE_SLIDE',
	response: {
		direction,
		sliderId
	},
});

export const updateActiveSlide = (sliderId, direction) => (dispatch) => dispatch(updateSlide(sliderId, direction));

const updateGalleryVisibility = (sliderId, isVisible) => ({
	type: 'UPDATE_GALLERY_VISIBILITY',
	response: {
		sliderId,
		isVisible
	}
});

export const toggleGallery = (sliderId, isVisible) => dispatch => dispatch(updateGalleryVisibility(sliderId, isVisible));


// Search Action Creator 
const requestSearch = () => ({
	type: 'REQUEST_SEARCH'
});

const recieveSearch = (payload, query) => ({
	type: 'RECIEVE_SEARCH',
	response: payload,
	query,
});

export const fetchSearchResults = (query) => (dispatch, getState) => {
	const state = getState();
	dispatch(requestSearch);
	if (isSearchFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchSearchResults(query).then((response) => {
		return response;
	}).then(response => {
		dispatch(recieveSearch(response, query));
	});
};


// Filter Action Creator
const requestFilters = () => ({
	type: 'REQUEST_FILTERS'
});

const recieveFilters = (payload) => ({
	type: 'RECIEVE_FILTERS',
	response: payload,
});

export const fetchFilters = () => (dispatch, getState) => {
	const state = getState();
	dispatch(requestFilters);
	if (isSearchFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchFilters().then((response) => {
		return response;
	}).then(response => {
		dispatch(recieveFilters(response));
	});
};

const updateFilterState = (id) => ({
	type: 'UPDATE_FILTER',
	response: {
		id,
	},
});

export const updateFilter = id => (dispatch) => dispatch(updateFilterState(id));


// Pratctice Action Creator 
const requestPractice = () => ({
	type: 'REQUEST_PRACTICE'
});

const recievePractice = (payload) => ({
	type: 'RECIEVE_PRACTICE',
	response: payload,
});

export const fetchPractice = () => (dispatch, getState) => {
	const state = getState();
	dispatch(requestPractice);
	if (isPracticeFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchPractice().then((response) => {
		return response;
	}).then(response => {
		dispatch(recievePractice(response));
	});
};

const requestCareer = () => ({
	type: 'REQUEST_CAREER'
});

const recieveCareer = payload => ({
	type: 'RECIEVE_CAREER',
	response: payload,
});

export const fetchCareer = (id) => (dispatch, getState) => {
	const state = getState();
	dispatch(requestCareer());
	if (isCareerFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchPost(id).then((response) => {
		dispatch(recieveCareer(response));
	});
};

const requestTeamMember = () => ({
	type: 'REQUEST_TEAMMEMBER'
});

const recieveTeamMember = payload => ({
	type: 'RECIEVE_TEAMMEMBER',
	response: payload,
});

export const fetchTeamMember = (id) => (dispatch, getState) => {
	const state = getState();
	dispatch(requestTeamMember());
	if (isTeamMemberFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchPost(id).then((response) => {
		dispatch(recieveTeamMember(response));
	});
};

const requestAuthorRelated = () => ({
	type: 'REQUEST_AUTHOR_RELATED'
});

const recieveAuthorRelated = (payload, name) => ({
	type: 'RECIEVE_AUTHOR_RELATED',
	response: payload,
	authorName: name,
});

export const fetchAuthorRelated = (name) => (dispatch, getState) => {
	const state = getState();
	dispatch(requestAuthorRelated());
	if (isRelatedAuthorPostsFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchRelatedAuthorPosts(name).then((response) => {
		return response;
	}).then(response => {
		dispatch(recieveAuthorRelated(response, name));
	});
};

const requestContact = () => ({
	type: 'REQUEST_CONTACT'
});

const recieveContact = (payload) => ({
	type: 'RECIEVE_CONTACT',
	response: payload,
});

export const fetchContact = () => (dispatch, getState) => {
	const state = getState();
	dispatch(requestContact);
	if (isContactFetching(state)) {
		return Promise.resolve();
	}
	return api.fetchContact().then((response) => {
		return response;
	}).then(response => {
		dispatch(recieveContact(response));
	});
};