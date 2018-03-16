'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menu = function menu() {
	return _react2.default.createElement(
		'nav',
		null,
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: '/' },
				'U'
			),
			'----/-/|<',
			_react2.default.createElement(
				'span',
				{ className: 'ws' },
				'-'
			),
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ className: 'menu-link', to: '/practice' },
				_react2.default.createElement(
					'span',
					{ className: 'ind' },
					'->'
				),
				'Practice'
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
			'/',
			_react2.default.createElement(
				'span',
				{ className: 'ws' },
				'-'
			),
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ className: 'menu-link', to: '/work' },
				_react2.default.createElement(
					'span',
					{ className: 'ind' },
					'->'
				),
				'Work'
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
			'/',
			_react2.default.createElement(
				'span',
				{ className: 'ws' },
				'-'
			),
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ className: 'menu-link', to: '/atelier' },
				_react2.default.createElement(
					'span',
					{ className: 'ind' },
					'->'
				),
				'Atelier'
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
			'/',
			_react2.default.createElement(
				'span',
				{ className: 'ws' },
				'-'
			),
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ className: 'menu-link', to: '/contact' },
				_react2.default.createElement(
					'span',
					{ className: 'ind' },
					'->'
				),
				'Contact'
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
			'-/|<//-////-\\-----/-',
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: '/' },
				'URAIQAT'
			),
			'///-\\-'
		),
		_react2.default.createElement(
			'div',
			null,
			'----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/',
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: '/' },
				'ARCHITECTS'
			),
			'\\--'
		),
		_react2.default.createElement(
			'div',
			null,
			'---/-/|<//',
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
				'a',
				{ href: '#' },
				'+Filter'
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
			'/',
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
				'a',
				{ href: '#' },
				'Search'
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
			'//-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\---'
		)
	);
};

exports.default = menu;