"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActiveAtelier = exports.getConfigs = exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app = function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    configs: {
      adjustForMobile: false
    },
    activePageSection: {
      atelier: 'about'
    }
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_ATELIER_ACTIVE_SECTION':
      //eslint-disable-line
      return _objectSpread({}, state, {
        activePageSection: _objectSpread({}, state.activePageSection, {
          atelier: action.response
        })
      });

    case 'UPDATE_APP_CONFIGS':
      //eslint-disable-line
      return _objectSpread({}, state, {
        configs: _objectSpread({}, state.configs, action.response)
      });

    default:
      return state;
  }
};

var _default = app;
exports.default = _default;

var getConfigs = function getConfigs(state) {
  return state.configs;
};

exports.getConfigs = getConfigs;

var getActiveAtelier = function getActiveAtelier(state) {
  return state.activePageSection.atelier;
};

exports.getActiveAtelier = getActiveAtelier;