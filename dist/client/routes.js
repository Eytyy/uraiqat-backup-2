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

var _Project = require('./containers/Project');

var _Project2 = _interopRequireDefault(_Project);

var _Atelier = require('./containers/Atelier');

var _Atelier2 = _interopRequireDefault(_Atelier);

var _AtelierProject = require('./containers/AtelierProject');

var _AtelierProject2 = _interopRequireDefault(_AtelierProject);

var _Practice = require('./containers/Practice');

var _Practice2 = _interopRequireDefault(_Practice);

var _Contact = require('./containers/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _Search = require('./containers/Search');

var _Search2 = _interopRequireDefault(_Search);

var _TeamMember = require('./containers/TeamMember');

var _TeamMember2 = _interopRequireDefault(_TeamMember);

var _Career = require('./containers/Career');

var _Career2 = _interopRequireDefault(_Career);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ component: _App2.default,
	routes: [{ path: '/',
		exact: true,
		component: _Home2.default
	}, { path: '/work',
		exact: true,
		component: _Work2.default
	}, { path: '/work/:id',
		exact: true,
		component: _Project2.default
	}, { path: '/atelier',
		exact: true,
		component: _Atelier2.default
	}, { path: '/atelier/:id',
		exact: true,
		component: _AtelierProject2.default
	}, { path: '/practice',
		exact: true,
		component: _Practice2.default
	}, { path: '/contact',
		exact: true,
		component: _Contact2.default
	}, { path: '/journal/:id',
		exact: true,
		component: _Post2.default
	}, { path: '/search',
		exact: true,
		component: _Search2.default
	}, { path: '/team/:id',
		exact: true,
		component: _TeamMember2.default
	}, { path: '/careers/:id',
		exact: true,
		component: _Career2.default
	}]
}];

exports.default = routes;