'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPost = exports.getAll = exports.getIsFetching = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

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
			var ids = action.response.map(function (_ref) {
				var sys = _ref.sys;
				return sys.id;
			});
			return _extends({}, state, {
				content: ids,
				isFetching: false,
				fetchedAll: true
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
			var ids = action.response.map(function (_ref2) {
				var sys = _ref2.sys;
				return sys.id;
			});
			action.response.forEach(function (_ref3) {
				var fields = _ref3.fields,
				    sys = _ref3.sys;

				ids[sys.id] = _extends({
					id: sys.id
				}, fields);
			});
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