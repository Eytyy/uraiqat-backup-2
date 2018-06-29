'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavItem = function NavItem(_ref) {
	var link = _ref.link,
	    glyph = _ref.glyph,
	    name = _ref.name;

	return _react2.default.createElement(
		_reactRouterDom.NavLink,
		{ activeClassName: 'active', className: 'link menu-link', to: link },
		name,
		_react2.default.createElement(
			'span',
			{ className: 'ws' },
			'-'
		),
		_react2.default.createElement(
			'span',
			{ className: glyph.className },
			glyph.content
		),
		_react2.default.createElement(
			'span',
			{ className: 'ws' },
			'-'
		)
	);
};

exports.default = NavItem;