'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPost = exports.getAll = exports.getIsFetching = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var All = function All() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		content: [],
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_POSTS':
		case 'REQUEST_POST':
			return _extends({}, state, {
				isFetching: true
			});
		case 'RECIEVE_POSTS':
			//eslint-disable-line
			var ids = action.response.map(function (_ref) {
				var sys = _ref.sys;
				return sys.id;
			});
			return _extends({}, state, {
				content: ids,
				isFetching: false,
				fetchedAll: true
			});
		case 'RECIEVE_POST':
			//eslint-disable-line
			var newContent = state.content;
			if (newContent.length === 0) {
				newContent.push(action.response.sys.id);
			}
			return _extends({}, state, {
				content: newContent,
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
		case 'REQUEST_POSTS':
		case 'REQUEST_POST':
			return _extends({}, state, {
				isFetching: true
			});

		case 'RECIEVE_POSTS':
			//eslint-disable-line
			var ids = {};
			action.response.forEach(function (_ref2) {
				var fields = _ref2.fields,
				    sys = _ref2.sys;

				ids[sys.id] = _extends({
					id: sys.id
				}, fields);
			});
			return _extends({}, state, ids, {
				isFetching: false
			});
		case 'RECIEVE_POST':
			//eslint-disable-line
			var contentId = action.response.sys.id;
			var fields = action.response.fields;
			if (typeof state[contentId] === 'undefined') {
				var _extends2;

				return _extends({}, state, (_extends2 = {}, _defineProperty(_extends2, contentId, _extends({
					id: contentId
				}, fields)), _defineProperty(_extends2, 'isFetching', false), _extends2));
			}
			return _extends({}, state, {
				isFetching: false
			});
		default:
			return state;
	}
};

var home = (0, _redux.combineReducers)({
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

exports.default = home;