'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
	return _react2.default.createElement(
		'footer',
		{ className: 'website-footer' },
		_react2.default.createElement(
			'div',
			null,
			'/-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////'
		),
		_react2.default.createElement(
			'div',
			null,
			'-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-'
		),
		_react2.default.createElement(
			'div',
			null,
			'\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-',
			_react2.default.createElement(
				_reactRouterDom.NavLink,
				{ className: 'link', activeClassName: 'active', to: '/' },
				'A'
			)
		)
	);
};

exports.default = Footer;