'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Post = require('../home/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandingChrono = function LandingChrono(_ref) {
	var content = _ref.content;

	if (typeof content === 'undefined') {
		return null;
	}
	return _react2.default.createElement(
		'section',
		{ className: 'landing-section landing-section--main' },
		content.map(function (post) {
			return _react2.default.createElement(_Post2.default, { content: post.fields, key: post.sys.id });
		})
	);
};

exports.default = LandingChrono;