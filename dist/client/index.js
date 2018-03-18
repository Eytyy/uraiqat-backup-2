'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _reactRouterConfig = require('react-router-config');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _main = require('../styles/main.scss');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//eslint-disable-line

var configureStore = function configureStore(initialState) {
	var middlewares = [_reduxThunk2.default];
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push((0, _reduxLogger.createLogger)());
	}

	return (0, _redux.createStore)(_reducers2.default, initialState, _redux.applyMiddleware.apply(undefined, middlewares));
};
var store = configureStore(window.__INITIAL_STATE__);

(0, _reactDom.hydrate)(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(
		_reactRouterDom.BrowserRouter,
		null,
		(0, _reactRouterConfig.renderRoutes)(_routes2.default)
	)
), document.getElementById('app'));