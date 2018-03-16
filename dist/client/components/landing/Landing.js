'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LandingFeatured = require('./LandingFeatured');

var _LandingFeatured2 = _interopRequireDefault(_LandingFeatured);

var _LandingChrono = require('./LandingChrono');

var _LandingChrono2 = _interopRequireDefault(_LandingChrono);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Landing = function Landing(_ref) {
	var page = _ref.page,
	    content = _ref.content;

	var classList = 'landing-page landing-page--' + page;
	var _content$ = content[0],
	    mainContent = _content$.mainContent,
	    featuredContent = _content$.featuredContent;

	return _react2.default.createElement(
		'section',
		{ className: classList },
		_react2.default.createElement(_LandingFeatured2.default, { page: page, content: featuredContent }),
		_react2.default.createElement(_LandingChrono2.default, { page: page, content: mainContent })
	);
};

exports.default = Landing;