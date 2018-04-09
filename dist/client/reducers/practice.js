'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getContent = exports.getIsFetching = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var All = function All() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		content: {},
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_PRACTICE':
			return _extends({}, state, {
				isFetching: true
			});
		case 'RECIEVE_PRACTICE':
			//eslint-disable-line
			return _extends({}, state, {
				content: _extends({}, state.content, action.response),
				isFetching: false
			});
		default:
			return state;
	}
};

var practice = (0, _redux.combineReducers)({
	All: All
});

var getIsFetching = exports.getIsFetching = function getIsFetching(state) {
	return state.All.isFetching;
};

var getContent = exports.getContent = function getContent(state) {
	return state.All.content;
};

exports.default = practice;