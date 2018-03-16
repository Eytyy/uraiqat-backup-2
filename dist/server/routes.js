'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _StaticRouter = require('react-router-dom/StaticRouter');

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

var _reactRouterConfig = require('react-router-config');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _routes = require('../client/routes');

var _routes2 = _interopRequireDefault(_routes);

var _reducers = require('../client/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var router = _express2.default.Router();
/*eslint-enable*/

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

router.get('/', function (req, res) {
	var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.url);
	var promises = branch.map(function (_ref) {
		var route = _ref.route;

		var fetchData = route.component.fetchData;
		var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(function () {
		var context = {};
		var content = (0, _server.renderToString)(_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_StaticRouter2.default,
				{ location: req.url, context: context },
				(0, _reactRouterConfig.renderRoutes)(_routes2.default)
			)
		));
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		var payload = store.getState();
		res.render('index', {
			title: 'Uraiqat Architects',
			data: payload,
			content: content
		});
	});
});

router.get('/practice', function (req, res) {
	var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.url);
	var promises = branch.map(function (_ref2) {
		var route = _ref2.route;

		var fetchData = route.component.fetchData;
		var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(function () {
		var context = {};
		var content = (0, _server.renderToString)(_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_StaticRouter2.default,
				{ location: req.url, context: context },
				(0, _reactRouterConfig.renderRoutes)(_routes2.default)
			)
		));
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		var payload = store.getState();
		res.render('index', {
			title: 'Practice',
			data: payload,
			content: content
		});
	});
});

router.get('/work', function (req, res) {
	var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.url);
	var promises = branch.map(function (_ref3) {
		var route = _ref3.route;

		var fetchData = route.component.fetchData;
		var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(function () {
		var context = {};
		var content = (0, _server.renderToString)(_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_StaticRouter2.default,
				{ location: req.url, context: context },
				(0, _reactRouterConfig.renderRoutes)(_routes2.default)
			)
		));
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		var payload = store.getState();
		res.render('index', {
			title: 'Work',
			data: payload,
			content: content
		});
	});
});

router.get('/atelier', function (req, res) {
	var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.url);
	var promises = branch.map(function (_ref4) {
		var route = _ref4.route;

		var fetchData = route.component.fetchData;
		var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(function () {
		var context = {};
		var content = (0, _server.renderToString)(_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_StaticRouter2.default,
				{ location: req.url, context: context },
				(0, _reactRouterConfig.renderRoutes)(_routes2.default)
			)
		));
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		var payload = store.getState();
		res.render('index', {
			title: 'Atelier',
			data: payload,
			content: content
		});
	});
});

router.get('/contact', function (req, res) {
	var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.url);
	var promises = branch.map(function (_ref5) {
		var route = _ref5.route;

		var fetchData = route.component.fetchData;
		var data = fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);
		return data;
	});
	return Promise.all(promises).then(function () {
		var context = {};
		var content = (0, _server.renderToString)(_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_StaticRouter2.default,
				{ location: req.url, context: context },
				(0, _reactRouterConfig.renderRoutes)(_routes2.default)
			)
		));
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		var payload = store.getState();
		res.render('index', {
			title: 'Contact',
			data: payload,
			content: content
		});
	});
});

router.get('/journal/:id', function (req, res) {
	var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.url);
	var promises = branch.map(function (_ref6) {
		var route = _ref6.route,
		    match = _ref6.match;

		var fetchData = route.component.fetchData;
		var val = fetchData instanceof Function ? fetchData(store, req.params.id) : Promise.resolve(null);
		return val;
	});
	return Promise.all(promises).then(function () {
		var context = {};
		var content = (0, _server.renderToString)(_react2.default.createElement(
			_reactRedux.Provider,
			{ store: store },
			_react2.default.createElement(
				_StaticRouter2.default,
				{ location: req.url, context: context },
				(0, _reactRouterConfig.renderRoutes)(_routes2.default)
			)
		));
		if (context.status === 404) {
			res.status(404);
		}
		if (context.status === 302) {
			return res.redirect(302, context.url);
		}
		var payload = store.getState();
		var obj = payload.posts.ById['' + req.params.id];
		// ogURL: `<meta property="og:url" content="${req.url}" />`,
		// ogTitle:`<meta property="og:title" content="Post | ${obj.title}" />`,
		// ogDesc: `<meta property="og:description" content="${obj.keyFeatures[0]}" />`,
		// ogImg: `<meta property="og:image" content="${obj.module[0].fields.images[0].fields.file.url}" />`,
		res.render('index', {
			title: 'Post ' + obj.title,
			data: payload,
			content: content
		});
	});
});

module.exports = router;