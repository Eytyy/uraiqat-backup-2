'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getCareer = exports.getCareers = exports.getIsCareerFetching = exports.getTeamMember = exports.getTeamMembers = exports.getIsTeamMemberFetching = exports.getContent = exports.getIsFetching = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Team = function Team() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		content: [],
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_TEAMMEMBER':
			return _extends({}, state, {
				isFetching: true
			});
		case 'RECIEVE_TEAMMEMBER':
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

var TeamByID = function TeamByID() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		content: [],
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_TEAMMEMBER':
			return _extends({}, state, {
				isFetching: true
			});
		case 'RECIEVE_TEAMMEMBER':
			//eslint-disable-line
			var contentId = action.response.sys.id;
			var fields = action.response.fields;
			if (typeof state[contentId] === 'undefined') {
				var _extends2;

				return _extends({}, state, (_extends2 = {}, _defineProperty(_extends2, contentId, _extends({
					id: contentId
				}, fields)), _defineProperty(_extends2, 'isFetching', false), _extends2));
			}
			return state;
		default:
			return state;
	}
};

var Career = function Career() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		content: [],
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_CAREER':
			return _extends({}, state, {
				isFetching: true
			});
		case 'RECIEVE_CAREER':
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

var CareerByID = function CareerByID() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		content: [],
		isFetching: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'REQUEST_CAREER':
			return _extends({}, state, {
				isFetching: true
			});
		case 'RECIEVE_CAREER':
			//eslint-disable-line
			var contentId = action.response.sys.id;
			var fields = action.response.fields;
			if (typeof state[contentId] === 'undefined') {
				var _extends3;

				return _extends({}, state, (_extends3 = {}, _defineProperty(_extends3, contentId, _extends({
					id: contentId
				}, fields)), _defineProperty(_extends3, 'isFetching', false), _extends3));
			}
			return state;
		default:
			return state;
	}
};

var practice = (0, _redux.combineReducers)({
	All: All,
	Team: Team,
	TeamByID: TeamByID,
	Career: Career,
	CareerByID: CareerByID
});

var getIsFetching = exports.getIsFetching = function getIsFetching(state) {
	return state.All.isFetching;
};

var getContent = exports.getContent = function getContent(state) {
	return state.All.content;
};

var getIsTeamMemberFetching = exports.getIsTeamMemberFetching = function getIsTeamMemberFetching(state) {
	return state.Team.isFetching;
};

var getTeamMembers = exports.getTeamMembers = function getTeamMembers(state) {
	return state.Team.content;
};

var getTeamMember = exports.getTeamMember = function getTeamMember(state, id) {
	return state.TeamByID[id];
};

var getIsCareerFetching = exports.getIsCareerFetching = function getIsCareerFetching(state) {
	return state.Career.isFetching;
};

var getCareers = exports.getCareers = function getCareers(state) {
	return state.Career.content;
};

var getCareer = exports.getCareer = function getCareer(state, id) {
	return state.CareerByID[id];
};

exports.default = practice;