'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getNextPrev = exports.getProject = exports.getAll = exports.getIsFetching = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BySection = function BySection() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		main: [],
		featured: [],
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_ATELIER_PROJECTS':
			return _extends({}, state, {
				isFetching: true
			});
		case 'RECIEVE_ATELIER_PROJECTS':
			//eslint-disable-line
			var main = typeof action.response[0].fields.mainContent !== 'undefined' ? action.response[0].fields.mainContent.filter(function (_ref) {
				var fields = _ref.fields;
				return typeof fields !== 'undefined';
			}).map(function (_ref2) {
				var sys = _ref2.sys;
				return sys.id;
			}) : [];
			var featured = typeof action.response[0].fields.featuredContent !== 'undefined' ? action.response[0].fields.featuredContent.filter(function (_ref3) {
				var fields = _ref3.fields;
				return typeof fields !== 'undefined';
			}).map(function (_ref4) {
				var sys = _ref4.sys;
				return sys.id;
			}) : [];
			return _extends({}, state, {
				isFetching: false,
				main: main,
				featured: featured
			});
		default:
			return state;
	}
};

var All = function All() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		intro: {},
		content: [],
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_ATELIER_PROJECTS':
		case 'REQUEST_ATELIER_PROJECT':
			return _extends({}, state, {
				isFetching: true
			});
		case 'RECIEVE_ATELIER_PROJECTS':
			//eslint-disable-line
			var main = typeof action.response[0].fields.mainContent !== 'undefined' ? action.response[0].fields.mainContent.filter(function (_ref5) {
				var fields = _ref5.fields;
				return typeof fields !== 'undefined';
			}).map(function (_ref6) {
				var sys = _ref6.sys;
				return sys.id;
			}) : [];
			var featured = typeof action.response[0].fields.featuredContent !== 'undefined' ? action.response[0].fields.featuredContent.filter(function (_ref7) {
				var fields = _ref7.fields;
				return typeof fields !== 'undefined';
			}).map(function (_ref8) {
				var sys = _ref8.sys;
				return sys.id;
			}) : [];
			var ids = main.concat(featured);
			var intro = {
				desc: action.response[0].fields.description,
				mainMedia: action.response[0].fields.mainMedia
			};
			return _extends({}, state, {
				intro: intro,
				content: ids,
				isFetching: false,
				fetchedAll: true
			});
		case 'RECIEVE_ATELIER_PROJECT':
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
		case 'REQUEST_ATELIER_PROJECTS':
		case 'REQUEST_ATELIER_PROJECT':
			return _extends({}, state, {
				isFetching: true
			});

		case 'RECIEVE_ATELIER_PROJECTS':
			//eslint-disable-line
			var ids = {};
			action.response[0].fields.mainContent && action.response[0].fields.mainContent.forEach(function (_ref9) {
				var fields = _ref9.fields,
				    sys = _ref9.sys;

				ids[sys.id] = _extends({
					id: sys.id
				}, fields);
			});
			action.response[0].fields.featuredContent && action.response[0].fields.featuredContent.forEach(function (_ref10) {
				var fields = _ref10.fields,
				    sys = _ref10.sys;

				ids[sys.id] = _extends({
					id: sys.id
				}, fields);
			});
			return _extends({}, state, ids, {
				isFetching: false
			});
		case 'RECIEVE_ATELIER_PROJECT':
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

var atelier = (0, _redux.combineReducers)({
	All: All,
	ById: ById,
	BySection: BySection
});

var getIsFetching = exports.getIsFetching = function getIsFetching(state) {
	return state.All.isFetching;
};

var getAll = exports.getAll = function getAll(state) {
	return {
		intro: state.All.intro,
		mainContent: state.BySection.main.sort(function (a, b) {
			return parseInt(b.year, 10) - parseInt(a.year, 10);
		}),
		featuredContent: state.BySection.featured.sort(function (a, b) {
			return parseInt(b.year, 10) - parseInt(a.year, 10);
		})
	};
};

var getProject = exports.getProject = function getProject(state, id) {
	return state.ById[id];
};

var getNextPrev = exports.getNextPrev = function getNextPrev(state, id) {
	var content = state.All.content;
	var currentIndex = content.findIndex(function (item) {
		return item === id;
	});
	var nextItemIndex = currentIndex === content.length - 1 ? 0 : currentIndex + 1;
	var prevItemIndex = currentIndex === 0 ? content.length - 1 : currentIndex - 1;
	return {
		next: state.ById[content[nextItemIndex]],
		prev: state.ById[content[prevItemIndex]]
	};
};

exports.default = atelier;