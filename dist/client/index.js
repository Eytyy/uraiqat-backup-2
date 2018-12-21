"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _reactRouterConfig = require("react-router-config");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxLogger = require("redux-logger");

var _reducers = _interopRequireDefault(require("./reducers"));

var _routes = _interopRequireDefault(require("./routes"));

var _main = _interopRequireDefault(require("../styles/main.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//eslint-disable-line
var configureStore = function configureStore(initialState) {
  var middlewares = [_reduxThunk.default];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push((0, _reduxLogger.createLogger)());
  }

  return (0, _redux.createStore)(_reducers.default, initialState, _redux.applyMiddleware.apply(void 0, middlewares));
};

var store = configureStore(window.__INITIAL_STATE__);
(0, _reactDom.hydrate)(_react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(_reactRouterDom.BrowserRouter, null, (0, _reactRouterConfig.renderRoutes)(_routes.default))), document.getElementById('app'));