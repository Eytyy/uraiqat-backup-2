'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getActiveSlide = exports.getGalleryContent = exports.getRelatedPosts = exports.isRelatedFetching = exports.getProject = exports.isProjectFetching = exports.getProjects = exports.isProjectsFetching = exports.getPost = exports.isPostFetching = exports.getPosts = exports.isPostsFetching = undefined;

var _redux = require('redux');

var _home = require('./home');

var fromHome = _interopRequireWildcard(_home);

var _work = require('./work');

var fromWork = _interopRequireWildcard(_work);

var _related = require('./related');

var fromRelated = _interopRequireWildcard(_related);

var _gallery = require('./gallery');

var fromGallery = _interopRequireWildcard(_gallery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RootReducer = (0, _redux.combineReducers)({
	posts: fromHome.default,
	projects: fromWork.default,
	related: fromRelated.default,
	gallery: fromGallery.default
});

// Home Selectors
var isPostsFetching = exports.isPostsFetching = function isPostsFetching(state) {
	return fromHome.getIsFetching(state.posts);
};

var getPosts = exports.getPosts = function getPosts(state) {
	var featuredContent = fromHome.getAll(state.posts).featuredContent.map(function (id) {
		return fromHome.getPost(state.posts, id);
	});
	var mainContent = fromHome.getAll(state.posts).mainContent.map(function (id) {
		return fromHome.getPost(state.posts, id);
	});
	return {
		featuredContent: featuredContent,
		mainContent: mainContent
	};
};

var isPostFetching = exports.isPostFetching = function isPostFetching(state) {
	return fromHome.getIsFetching(state.posts);
};

var getPost = exports.getPost = function getPost(state, id) {
	return fromHome.getPost(state.posts, id);
};

// Work Selectors
var isProjectsFetching = exports.isProjectsFetching = function isProjectsFetching(state) {
	return fromWork.getIsFetching(state.projects);
};

var getProjects = exports.getProjects = function getProjects(state) {
	var featuredContent = fromWork.getAll(state.projects).featuredContent.map(function (id) {
		return fromWork.getProject(state.projects, id);
	});
	var mainContent = fromWork.getAll(state.projects).mainContent.map(function (id) {
		return fromWork.getProject(state.projects, id);
	});
	return {
		featuredContent: featuredContent,
		mainContent: mainContent
	};
};

var isProjectFetching = exports.isProjectFetching = function isProjectFetching(state) {
	return fromWork.getIsFetching(state.projects);
};

var getProject = exports.getProject = function getProject(state, id) {
	return fromWork.getProject(state.projects, id);
};

// Related Selectors
var isRelatedFetching = exports.isRelatedFetching = function isRelatedFetching(state) {
	return fromRelated.getIsFetching(state.related);
};

var getRelatedPosts = exports.getRelatedPosts = function getRelatedPosts(state, id, postID) {
	var content = fromRelated.getPost(state.related, id);
	return typeof content === 'undefined' ? [] : content.filter(function (_ref) {
		var sys = _ref.sys;
		return sys.id !== postID;
	});
};

// Gallery Selectors
var getGalleryContent = exports.getGalleryContent = function getGalleryContent(state) {
	return fromGallery.getGalleryContent(state.gallery);
};

var getActiveSlide = exports.getActiveSlide = function getActiveSlide(state, id) {
	return fromGallery.getActiveSlide(state.gallery, id);
};

exports.default = RootReducer;