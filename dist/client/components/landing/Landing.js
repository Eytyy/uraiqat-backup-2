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

var _BodyText = require('../BodyText');

var _BodyText2 = _interopRequireDefault(_BodyText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import MediaComponent from'../media/MediaComponent';

var Landing = function Landing(_ref) {
	var page = _ref.page,
	    content = _ref.content,
	    intro = _ref.intro;

	var classList = 'landing-page landing-page--' + page + ' main-section';
	var mainContent = content.mainContent,
	    featuredContent = content.featuredContent;

	return _react2.default.createElement(
		'section',
		{ className: classList },
		page === 'atelier' && intro && _react2.default.createElement(
			'div',
			{ className: 'atelier-landing__top' },
			_react2.default.createElement(
				'div',
				{ className: 'atelier-landing__top__desc' },
				intro.desc && _react2.default.createElement(_BodyText2.default, { content: intro.desc })
			)
		),
		featuredContent && _react2.default.createElement(_LandingFeatured2.default, { page: page, content: featuredContent }),
		mainContent && _react2.default.createElement(_LandingChrono2.default, { page: page, content: mainContent })
	);
};

exports.default = Landing;