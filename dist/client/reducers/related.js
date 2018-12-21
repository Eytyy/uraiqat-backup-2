"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getAuthorPost = exports.getAuthorAll = exports.getIsAuthorFetching = exports.getPost = exports.getAll = exports.getIsFetching = void 0;

var _redux = require("redux");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var All = function All() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    content: [],
    isFetching: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_RELATED':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_RELATED':
      //eslint-disable-line
      var content = [].concat(_toConsumableArray(state.content), [action.projectID]);
      return _objectSpread({}, state, {
        content: content,
        isFetching: false
      });

    default:
      return state;
  }
};

var AuthorRelated = function AuthorRelated() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    content: [],
    isFetching: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_AUTHOR_RELATED':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_AUTHOR_RELATED':
      //eslint-disable-line
      var content = [].concat(_toConsumableArray(state.content), [action.authorName]);
      return _objectSpread({}, state, {
        content: content,
        isFetching: false
      });

    default:
      return state;
  }
};

var ByAuthorName = function ByAuthorName() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_AUTHOR_RELATED':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_AUTHOR_RELATED':
      //eslint-disable-line
      var names = {};
      names[action.authorName] = action.response;
      return _objectSpread({}, state, names, {
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
    case 'REQUEST_RELATED':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_RELATED':
      //eslint-disable-line
      var ids = {};
      ids[action.projectID] = action.response;
      return _objectSpread({}, state, ids, {
        isFetching: false
      });

    default:
      return state;
  }
};

var related = (0, _redux.combineReducers)({
  All: All,
  ById: ById,
  AuthorRelated: AuthorRelated,
  ByAuthorName: ByAuthorName
});

var getIsFetching = function getIsFetching(state) {
  return state.All.isFetching;
};

exports.getIsFetching = getIsFetching;

var getAll = function getAll(state) {
  return state.All.content;
};

exports.getAll = getAll;

var getPost = function getPost(state, id) {
  return state.ById[id];
};

exports.getPost = getPost;

var getIsAuthorFetching = function getIsAuthorFetching(state) {
  return state.AuthorRelated.isFetching;
};

exports.getIsAuthorFetching = getIsAuthorFetching;

var getAuthorAll = function getAuthorAll(state) {
  return state.AuthorRelated.content;
};

exports.getAuthorAll = getAuthorAll;

var getAuthorPost = function getAuthorPost(state, name) {
  return state.ByAuthorName[name];
};

exports.getAuthorPost = getAuthorPost;
var _default = related;
exports.default = _default;