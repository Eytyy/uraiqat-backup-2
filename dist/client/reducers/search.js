"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getActiveFilters = exports.getFilters = exports.getAll = exports.getIsFetching = void 0;

var _redux = require("redux");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var All = function All() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    results: {},
    filters: [],
    isFetching: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_SEARCH':
      return _objectSpread({}, state, {
        isFetching: true
      });

    case 'RECIEVE_SEARCH':
      //eslint-disable-line
      return _objectSpread({}, state, {
        results: _objectSpread({}, state.results, _defineProperty({}, action.query, _toConsumableArray(action.response))),
        isFetching: false
      });

    case 'RECIEVE_FILTERS':
      //eslint-disable-line
      var filters = action.response.map(function (_ref) {
        var sys = _ref.sys,
            fields = _ref.fields;
        return {
          title: fields.title,
          id: sys.id,
          active: false
        };
      });
      return _objectSpread({}, state, {
        filters: filters
      });

    case 'UPDATE_FILTER':
      //eslint-disable-line
      var updatedFilters = state.filters;
      var filter = updatedFilters.find(function (_ref2) {
        var id = _ref2.id;
        return id === action.response.id;
      });
      filter.active = !filter.active;
      return _objectSpread({}, state, {
        filters: _toConsumableArray(updatedFilters)
      });

    case 'CLEAR_FILTERS':
      //eslint-disable-line
      var newFilters = state.filters.map(function (filter) {
        return _objectSpread({}, filter, {
          active: false
        });
      });
      return _objectSpread({}, state, {
        filters: _toConsumableArray(newFilters)
      });

    default:
      return state;
  }
};

var search = (0, _redux.combineReducers)({
  All: All
});

var getIsFetching = function getIsFetching(state) {
  return state.All.isFetching;
};

exports.getIsFetching = getIsFetching;

var getAll = function getAll(state, query) {
  return state.All.results[query];
};

exports.getAll = getAll;

var getFilters = function getFilters(state) {
  return state.All.filters;
};

exports.getFilters = getFilters;

var getActiveFilters = function getActiveFilters(state) {
  return state.All.filters.filter(function (_ref3) {
    var active = _ref3.active;
    return active;
  });
};

exports.getActiveFilters = getActiveFilters;
var _default = search;
exports.default = _default;