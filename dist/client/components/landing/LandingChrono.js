'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
	var sorted = content.sort(function (a, b) {
		return parseInt(b.fields.date, 10) - parseInt(a.fields.date, 10);
	});
	return _react2.default.createElement(
		'section',
		{ className: 'landing-section landing-section--main' },
		sorted.map(function (post) {
			return _react2.default.createElement(_Post2.default, _extends({}, post.fields, { id: post.sys.id, key: post.sys.id }));
		})
	);
};

exports.default = LandingChrono;