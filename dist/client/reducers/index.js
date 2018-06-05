'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getContactContent = exports.isContactFetching = exports.getCareer = exports.isCareerFetching = exports.getTeamMember = exports.isTeamMemberFetching = exports.getPracticeContent = exports.isPracticeFetching = exports.getFilteredContent = exports.getActiveFilters = exports.getFilters = exports.getSearchResults = exports.isSearchFetching = exports.getActiveSlide = exports.getGalleryContent = exports.getRelatedAuthorPosts = exports.isRelatedAuthorPostsFetching = exports.getRelatedPosts = exports.isRelatedFetching = exports.getNextPrev = exports.getAtelierProject = exports.isAtelierProjectFetching = exports.getAtelierProjects = exports.isAtelierProjectsFetching = exports.getProject = exports.isProjectFetching = exports.getProjects = exports.isProjectsFetching = exports.getPost = exports.isPostFetching = exports.getPosts = exports.isPostsFetching = undefined;

var _redux = require('redux');

var _home = require('./home');

var fromHome = _interopRequireWildcard(_home);

var _work = require('./work');

var fromWork = _interopRequireWildcard(_work);

var _atelier = require('./atelier');

var fromAtelier = _interopRequireWildcard(_atelier);

var _related = require('./related');

var fromRelated = _interopRequireWildcard(_related);

var _gallery = require('./gallery');

var fromGallery = _interopRequireWildcard(_gallery);

var _search = require('./search');

var fromSearch = _interopRequireWildcard(_search);

var _practice = require('./practice');

var fromPractice = _interopRequireWildcard(_practice);

var _contact = require('./contact');

var fromContact = _interopRequireWildcard(_contact);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RootReducer = (0, _redux.combineReducers)({
	posts: fromHome.default,
	projects: fromWork.default,
	atelier: fromAtelier.default,
	related: fromRelated.default,
	gallery: fromGallery.default,
	search: fromSearch.default,
	practice: fromPractice.default,
	contact: fromContact.default
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
	var featuredContent = fromWork.getAll(state.projects).featuredContent ? fromWork.getAll(state.projects).featuredContent.map(function (id) {
		return fromWork.getProject(state.projects, id);
	}) : [];
	var mainContent = fromWork.getAll(state.projects).mainContent ? fromWork.getAll(state.projects).mainContent.map(function (id) {
		return fromWork.getProject(state.projects, id);
	}) : [];
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

// Atelier Selectors
var isAtelierProjectsFetching = exports.isAtelierProjectsFetching = function isAtelierProjectsFetching(state) {
	return fromAtelier.getIsFetching(state.atelier);
};

var getAtelierProjects = exports.getAtelierProjects = function getAtelierProjects(state) {
	var ALL = fromAtelier.getAll(state.atelier);
	var featuredContent = ALL.featuredContent.map(function (id) {
		return fromWork.getProject(state.atelier, id);
	});
	var mainContent = ALL.mainContent.map(function (id) {
		return fromAtelier.getProject(state.atelier, id);
	});
	return {
		featuredContent: featuredContent,
		mainContent: mainContent,
		intro: ALL.intro
	};
};

var isAtelierProjectFetching = exports.isAtelierProjectFetching = function isAtelierProjectFetching(state) {
	return fromAtelier.getIsFetching(state.atelier);
};

var getAtelierProject = exports.getAtelierProject = function getAtelierProject(state, id) {
	return fromAtelier.getProject(state.atelier, id);
};

var getNextPrev = exports.getNextPrev = function getNextPrev(state, id, type) {
	switch (type) {
		case 'atelier':
			return fromAtelier.getNextPrev(state.atelier, id);
		default:
			return fromWork.getNextPrev(state.projects, id);
	}
};

// Related Selectors
var isRelatedFetching = exports.isRelatedFetching = function isRelatedFetching(state) {
	return fromRelated.getIsFetching(state.related);
};
var getRelatedPosts = exports.getRelatedPosts = function getRelatedPosts(state, id, postID) {
	var content = fromRelated.getPost(state.related, id);
	if (typeof postID === 'undefined') {
		var rval = typeof content === 'undefined' ? [] : content;
		return rval;
	}
	return typeof content === 'undefined' ? [] : content.filter(function (_ref) {
		var sys = _ref.sys;
		return sys.id !== postID;
	});
};

var isRelatedAuthorPostsFetching = exports.isRelatedAuthorPostsFetching = function isRelatedAuthorPostsFetching(state) {
	return fromRelated.getIsAuthorFetching(state.related);
};
var getRelatedAuthorPosts = exports.getRelatedAuthorPosts = function getRelatedAuthorPosts(state, name) {
	var content = fromRelated.getAuthorPost(state.related, name);
	return typeof content === 'undefined' ? [] : content;
};

// Gallery Selectors
var getGalleryContent = exports.getGalleryContent = function getGalleryContent(state) {
	return fromGallery.getGalleryContent(state.gallery);
};

var getActiveSlide = exports.getActiveSlide = function getActiveSlide(state, id) {
	return fromGallery.getActiveSlide(state.gallery, id);
};

// Search Selectors
var isSearchFetching = exports.isSearchFetching = function isSearchFetching(state) {
	return fromSearch.getIsFetching(state.search);
};
var getSearchResults = exports.getSearchResults = function getSearchResults(state, query) {
	var content = fromSearch.getAll(state.search, query);
	return typeof content === 'undefined' ? [] : content;
};

// Filters Selectors
var getFilters = exports.getFilters = function getFilters(state) {
	var content = fromSearch.getFilters(state.search);
	return typeof content === 'undefined' ? [] : content;
};

var getActiveFilters = exports.getActiveFilters = function getActiveFilters(state) {
	return fromSearch.getActiveFilters(state.search);
};

var getFilteredContent = exports.getFilteredContent = function getFilteredContent(state) {
	var posts = getPosts(state);
	var filters = getActiveFilters(state).map(function (_ref2) {
		var title = _ref2.title;
		return title;
	});
	if (filters.length > 0) {
		var featuredContent = posts.featuredContent.filter(function (_ref3) {
			var category = _ref3.category;
			return filters.indexOf(category.fields.title) > -1;
		});
		var mainContent = posts.mainContent.filter(function (_ref4) {
			var category = _ref4.category;
			return filters.indexOf(category.fields.title) > -1;
		});
		return {
			featuredContent: featuredContent,
			mainContent: mainContent
		};
	}
	return posts;
};

var isPracticeFetching = exports.isPracticeFetching = function isPracticeFetching(state) {
	return fromPractice.getIsFetching(state.practice);
};

var getPracticeContent = exports.getPracticeContent = function getPracticeContent(state) {
	return fromPractice.getContent(state.practice);
};

var isTeamMemberFetching = exports.isTeamMemberFetching = function isTeamMemberFetching(state) {
	return fromPractice.getIsTeamMemberFetching(state.practice);
};

var getTeamMember = exports.getTeamMember = function getTeamMember(state, id) {
	return fromPractice.getTeamMember(state.practice, id);
};

var isCareerFetching = exports.isCareerFetching = function isCareerFetching(state) {
	return fromPractice.getIsCareerFetching(state.practice);
};

var getCareer = exports.getCareer = function getCareer(state, id) {
	return fromPractice.getCareer(state.practice, id);
};

var isContactFetching = exports.isContactFetching = function isContactFetching(state) {
	return fromPractice.getIsFetching(state.contact);
};

var getContactContent = exports.getContactContent = function getContactContent(state) {
	return fromContact.getContent(state.contact);
};

exports.default = RootReducer;