'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainNav = function MainNav(_ref) {
	var config = _ref.config;

	return _react2.default.createElement(
		'nav',
		{ className: 'header--desktop__main__nav' },
		config.items.map(function (_ref2, index) {
			var name = _ref2.name,
			    link = _ref2.link,
			    glyph = _ref2.glyph;
			return _react2.default.createElement(
				'span',
				{ key: 'header__link-chunk--' + (index + 1), className: 'header__link-chunk' },
				_react2.default.createElement(
					'span',
					{ className: 'ws' },
					'-'
				),
				_react2.default.createElement(
					_reactRouterDom.NavLink,
					{
						activeClassName: 'active',
						className: 'link menu-link',
						to: link
					},
					_react2.default.createElement(
						'span',
						{ className: glyph.className },
						glyph.content
					),
					name
				),
				_react2.default.createElement(
					'span',
					{ className: 'ws' },
					'-'
				),
				_react2.default.createElement(
					'span',
					{ className: 'ws' },
					'-'
				),
				_react2.default.createElement(
					'span',
					{ className: 'ws' },
					'-'
				),
				index < config.items.length - 1 && _react2.default.createElement(
					'span',
					{ className: 'separator' },
					'/'
				)
			);
		})
	);
};

exports.default = MainNav;