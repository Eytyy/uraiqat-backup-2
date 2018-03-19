'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPost = exports.getAll = exports.getIsFetching = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var All = function All() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		content: [],
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_RELATED':
			return _extends({}, state, {
				isFetching: true
			});
		case 'RECIEVE_RELATED':
			//eslint-disable-line
			var content = [].concat(_toConsumableArray(state.content), [action.projectID]);
			return _extends({}, state, {
				content: content,
				isFetching: false
			});
		default:
			return state;
	}
};

var ById = function ById() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_RELATED':
			return _extends({}, state, {
				isFetching: true
			});

		case 'RECIEVE_RELATED':
			//eslint-disable-line
			var ids = {};
			ids[action.projectID] = action.response;
			return _extends({}, state, ids, {
				isFetching: false
			});
		default:
			return state;
	}
};

var related = (0, _redux.combineReducers)({
	All: All,
	ById: ById
});

var getIsFetching = exports.getIsFetching = function getIsFetching(state) {
	return state.All.isFetching;
};

var getAll = exports.getAll = function getAll(state) {
	return state.All.content;
};

var getPost = exports.getPost = function getPost(state, id) {
	return state.ById[id];
};

exports.default = related;