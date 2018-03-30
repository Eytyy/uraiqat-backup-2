'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getFilters = exports.getAll = exports.getIsFetching = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var All = function All() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		results: {},
		filters: [],
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_SEARCH':
			return _extends({}, state, {
				isFetching: true
			});
		case 'RECIEVE_SEARCH':
			//eslint-disable-line
			return _extends({}, state, {
				results: _extends({}, state.results, _defineProperty({}, action.query, [].concat(_toConsumableArray(action.response)))),
				isFetching: false
			});
		case 'RECIEVE_FILTERS':
			//eslint-disable-line
			var filters = action.response.map(function (_ref) {
				var sys = _ref.sys,
				    fields = _ref.fields;
				return {
					title: fields.title,
					id: sys.id
				};
			});
			return _extends({}, state, {
				filters: filters
			});
		default:
			return state;
	}
};

var search = (0, _redux.combineReducers)({
	All: All
});

var getIsFetching = exports.getIsFetching = function getIsFetching(state) {
	return state.All.isFetching;
};

var getAll = exports.getAll = function getAll(state, query) {
	return state.All.results[query];
};

var getFilters = exports.getFilters = function getFilters(state) {
	return state.All.filters;
};

exports.default = search;