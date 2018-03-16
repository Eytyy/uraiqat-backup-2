'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchProject = exports.fetchProjects = exports.fetchPost = exports.fetchPosts = exports.initClient = undefined;

var _reducers = require('./reducers');

var _api = require('./api');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// App Action Creators
var requestClient = function requestClient() {
	return {
		type: 'INIT_CLIENT'
	};
};

var recieveClient = function recieveClient(authState) {
	return {
		type: 'LOADED_CLIENT',
		authState: authState
	};
};

var initClient = exports.initClient = function initClient() {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestClient());
		if ((0, _reducers.getIsClientLoading)(state)) {
			return Promise.resolve();
		}
		return api.setupClient().then(function (response) {
			return response;
		}).then(function (response) {
			dispatch(recieveClient(response));
		});
	};
};

// Journal Action Creators
var requestPosts = function requestPosts() {
	return {
		type: 'REQUEST_POSTS'
	};
};

var recievePosts = function recievePosts(payload) {
	return {
		type: 'RECIEVE_POSTS',
		response: payload
	};
};

var requestPost = function requestPost() {
	return {
		type: 'REQUEST_POST'
	};
};

var recievePost = function recievePost(payload) {
	return {
		type: 'RECIEVE_POST',
		response: payload
	};
};

var fetchPosts = exports.fetchPosts = function fetchPosts() {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestPosts());
		if ((0, _reducers.isPostsFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchPosts().then(function (response) {
			return response;
		}).then(function (response) {
			dispatch(recievePosts(response));
		});
	};
};

var fetchPost = exports.fetchPost = function fetchPost(id) {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestPost());
		if ((0, _reducers.isPostFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchPost(id).then(function (response) {
			dispatch(recievePost(response));
		});
	};
};

// Work Action Creators
var requestProjects = function requestProjects() {
	return {
		type: 'REQUEST_PROJECTS'
	};
};

var recieveProjects = function recieveProjects(payload) {
	return {
		type: 'RECIEVE_PROJECTS',
		response: payload
	};
};

var requestProject = function requestProject() {
	return {
		type: 'REQUEST_PROJECT'
	};
};

var recieveProject = function recieveProject(payload) {
	return {
		type: 'RECIEVE_PROJECT',
		response: payload
	};
};

var fetchProjects = exports.fetchProjects = function fetchProjects() {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestProjects());
		if ((0, _reducers.isProjectsFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchProjects().then(function (response) {
			return response;
		}).then(function (response) {
			dispatch(recieveProjects(response));
		});
	};
};

var fetchProject = exports.fetchProject = function fetchProject(id) {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestProject());
		if ((0, _reducers.isProjectFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchProject(id).then(function (response) {
			dispatch(recieveProject(response));
		});
	};
};