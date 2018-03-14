'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPost = exports.isPostFetching = exports.getPosts = exports.isPostsFetching = undefined;

var _redux = require('redux');

var _home = require('./home');

var fromHome = _interopRequireWildcard(_home);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RootReducer = (0, _redux.combineReducers)({
	posts: fromHome.default
});

var isPostsFetching = exports.isPostsFetching = function isPostsFetching(state) {
	return fromHome.getIsFetching(state.posts);
};

var getPosts = exports.getPosts = function getPosts(state) {
	return fromHome.getAll(state.posts).map(function (id) {
		return fromHome.getPost(state.posts, id);
	});
};

var isPostFetching = exports.isPostFetching = function isPostFetching(state) {
	return fromHome.getIsFetching(state.posts);
};

var getPost = exports.getPost = function getPost(state, id) {
	return fromHome.getPost(state.posts, id);
};

exports.default = RootReducer;