'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./containers/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Post = require('./containers/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ component: _App2.default,
	routes: [{ path: '/',
		exact: true,
		component: _Home2.default
	}, { path: '/journal/:id',
		exact: true,
		component: _Post2.default
	}]
}];

exports.default = routes;