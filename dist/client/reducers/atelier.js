"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getNextPrev = exports.getIntro = exports.getProject = exports.getAll = exports.getIsFetching = void 0;

var _redux = require("redux");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var All = function All() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    intro: {},
    content: [],
    isFetching: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_ATELIER_PROJECTS':
    case 'REQUEST_ATELIER_PROJECT':
      return _objectSpread({}, state, {
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
      var intro = {
        desc: action.response[0].fields.description,
        mainMedia: action.response[0].fields.mainMedia
      };
      return _objectSpread({}, state, {
        intro: intro,
        content: main,
        isFetching: false,
        fetchedAll: true
      });

    case 'RECIEVE_ATELIER_PROJECT':
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

var ById = function ById() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_ATELIER_PROJECTS':
    case 'REQUEST_ATELIER_PROJECT':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_ATELIER_PROJECTS':
      //eslint-disable-line
      var ids = {};
      action.response[0].fields.mainContent && action.response[0].fields.mainContent.forEach(function (_ref3) {
        var fields = _ref3.fields,
            sys = _ref3.sys;
        ids[sys.id] = _objectSpread({
          id: sys.id
        }, fields);
      });
      return _objectSpread({}, state, ids, {
        isFetching: false
      });

    case 'RECIEVE_ATELIER_PROJECT':
      //eslint-disable-line
      var contentId = action.response.sys.id;
      var fields = action.response.fields;

      if (typeof state[contentId] === 'undefined') {
        var _objectSpread2;

        return _objectSpread({}, state, (_objectSpread2 = {}, _defineProperty(_objectSpread2, contentId, _objectSpread({
          id: contentId
        }, fields)), _defineProperty(_objectSpread2, "isFetching", false), _objectSpread2));
      }

      return _objectSpread({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
};

var atelier = (0, _redux.combineReducers)({
  All: All,
  ById: ById
});

var getIsFetching = function getIsFetching(state) {
  return state.All.isFetching;
};

exports.getIsFetching = getIsFetching;

var getAll = function getAll(state) {
  return state.All.content;
};

exports.getAll = getAll;

var getProject = function getProject(state, id) {
  return state.ById[id];
};

exports.getProject = getProject;

var getIntro = function getIntro(state) {
  return state.All.intro;
};

exports.getIntro = getIntro;

var getNextPrev = function getNextPrev(state, id) {
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

exports.getNextPrev = getNextPrev;
var _default = atelier;
exports.default = _default;