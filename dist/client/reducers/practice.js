"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getCareer = exports.getCareers = exports.getIsCareerFetching = exports.getTeamMember = exports.getTeamMembers = exports.getIsTeamMemberFetching = exports.getContent = exports.getIsFetching = void 0;

var _redux = require("redux");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var All = function All() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    content: {},
    isFetching: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_PRACTICE':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_PRACTICE':
      //eslint-disable-line
      return _objectSpread({}, state, {
        content: _objectSpread({}, state.content, action.response),
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
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_TEAMMEMBER':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_TEAMMEMBER':
      //eslint-disable-line
      var newContent = state.content;

      if (newContent.length === 0) {
        newContent.push(action.response.sys.id);
      }

      return _objectSpread({}, state, {
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
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_TEAMMEMBER':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_TEAMMEMBER':
      //eslint-disable-line
      var contentId = action.response.sys.id;
      var fields = action.response.fields;

      if (typeof state[contentId] === 'undefined') {
        var _objectSpread2;

        return _objectSpread({}, state, (_objectSpread2 = {}, _defineProperty(_objectSpread2, contentId, _objectSpread({
          id: contentId
        }, fields)), _defineProperty(_objectSpread2, "isFetching", false), _objectSpread2));
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
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_CAREER':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_CAREER':
      //eslint-disable-line
      var newContent = state.content;

      if (newContent.length === 0) {
        newContent.push(action.response.sys.id);
      }

      return _objectSpread({}, state, {
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
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_CAREER':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_CAREER':
      //eslint-disable-line
      var contentId = action.response.sys.id;
      var fields = action.response.fields;

      if (typeof state[contentId] === 'undefined') {
        var _objectSpread3;

        return _objectSpread({}, state, (_objectSpread3 = {}, _defineProperty(_objectSpread3, contentId, _objectSpread({
          id: contentId
        }, fields)), _defineProperty(_objectSpread3, "isFetching", false), _objectSpread3));
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

var getIsFetching = function getIsFetching(state) {
  return state.All.isFetching;
};

exports.getIsFetching = getIsFetching;

var getContent = function getContent(state) {
  return state.All.content;
};

exports.getContent = getContent;

var getIsTeamMemberFetching = function getIsTeamMemberFetching(state) {
  return state.Team.isFetching;
};

exports.getIsTeamMemberFetching = getIsTeamMemberFetching;

var getTeamMembers = function getTeamMembers(state) {
  return state.Team.content;
};

exports.getTeamMembers = getTeamMembers;

var getTeamMember = function getTeamMember(state, id) {
  return state.TeamByID[id];
};

exports.getTeamMember = getTeamMember;

var getIsCareerFetching = function getIsCareerFetching(state) {
  return state.Career.isFetching;
};

exports.getIsCareerFetching = getIsCareerFetching;

var getCareers = function getCareers(state) {
  return state.Career.content;
};

exports.getCareers = getCareers;

var getCareer = function getCareer(state, id) {
  return state.CareerByID[id];
};

exports.getCareer = getCareer;
var _default = practice;
exports.default = _default;