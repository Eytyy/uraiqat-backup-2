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

var _Work = require('./containers/Work');

var _Work2 = _interopRequireDefault(_Work);

var _Atelier = require('./containers/Atelier');

var _Atelier2 = _interopRequireDefault(_Atelier);

var _Practice = require('./containers/Practice');

var _Practice2 = _interopRequireDefault(_Practice);

var _Contact = require('./containers/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ component: _App2.default,
	routes: [{ path: '/',
		exact: true,
		component: _Home2.default
	}, { path: '/work',
		exact: true,
		component: _Work2.default
	}, { path: '/atelier',
		exact: true,
		component: _Atelier2.default
	}, { path: '/practice',
		exact: true,
		component: _Practice2.default
	}, { path: '/contact',
		exact: true,
		component: _Contact2.default
	}, { path: '/journal/:id',
		exact: true,
		component: _Post2.default
	}]
}];

exports.default = routes;