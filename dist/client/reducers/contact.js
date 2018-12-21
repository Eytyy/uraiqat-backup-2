"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getContent = exports.getIsFetching = void 0;

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
    case 'REQUEST_CONTACT':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_CONTACT':
      //eslint-disable-line
      return _objectSpread({}, state, {
        content: _objectSpread({}, state.content, action.response),
        isFetching: false
      });

    default:
      return state;
  }
};

var Contact = (0, _redux.combineReducers)({
  All: All
});

var getIsFetching = function getIsFetching(state) {
  return state.All.isFetching;
};

exports.getIsFetching = getIsFetching;

var getContent = function getContent(state) {
  return state.All.content;
};

exports.getContent = getContent;
var _default = Contact;
exports.default = _default;