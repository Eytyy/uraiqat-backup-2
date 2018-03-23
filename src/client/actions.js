import { getIsClientLoading, isPostsFetching, isPostFetching, isProjectsFetching, isProjectFetching, isRelatedFetching } from './reducers';
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
const recieveGalleryContent = (content) => ({
	type: 'RECIEVE_GALLERY_CONTENT',
	response: {
		content,
	}
});
export const updateGallery = (content) => (dispatch) =>
	dispatch(recieveGalleryContent(content));


const updateSlide = (direction) => ({
	type: 'UPDATE_ACTIVE_SLIDE',
	response: direction,
});
export const updateActiveSlide = (direction) => (dispatch) => dispatch(updateSlide(direction));


const updateGalleryVisibility = visible => ({
	type: 'UPDATE_GALLERY_VISIBILITY',
	response: visible
});
export const toggleGallery = visible => dispatch => dispatch(updateGalleryVisibility(visible));