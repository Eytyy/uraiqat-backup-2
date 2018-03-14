import { getIsClientLoading, isPostsFetching, isPostFetching } from './reducers';
import * as api from './api';

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

