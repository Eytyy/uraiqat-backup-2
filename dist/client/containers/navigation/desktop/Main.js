'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _MainNav = require('./MainNav');

var _MainNav2 = _interopRequireDefault(_MainNav);

var _PatternChunk = require('../../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
	var numberOfStaticItems = 'U'.length + 'Uraiqat'.length;
	var fixedStart = window.innerWidth >= 1280 ? 10 : 7;
	var config = {
		spacesBefore: 1,
		spacesAfter: 3,
		separator: '/',
		items: [{ name: 'Practice', link: '/practice', glyph: { className: 'ind', content: '->' }, size: 'Practice'.length }, { name: 'Work', link: '/work', glyph: { className: 'ind', content: '->' }, size: 'Work'.length }, { name: 'Atelier', link: '/atelier', glyph: { className: 'ind', content: '->' }, size: 'Atelier'.length }, { name: 'Contact', link: '/contact', glyph: { className: 'ind', content: '->' }, size: 'Contact'.length }]
	};
	var reservedNavSpaces = config.items.reduce(function (current, next) {
		return current + next.size + next.glyph.content.length;
	}, 0);
	var reservedNavEmptySpaces = config.items.length * (config.spacesBefore + config.spacesAfter);
	var numberofNavSeparators = config.items.length - 1;
	var totalReservedSpaces = reservedNavSpaces + reservedNavEmptySpaces + numberofNavSeparators + numberOfStaticItems + fixedStart;
	return _react2.default.createElement(
		'div',
		{ className: 'header--desktop__main' },
		_react2.default.createElement(
			_reactRouterDom.NavLink,
			{ className: 'link', to: '/' },
			'U'
		),
		_react2.default.createElement(_PatternChunk2.default, { fixed: fixedStart }),
		_react2.default.createElement(_MainNav2.default, { config: config }),
		_react2.default.createElement(_PatternChunk2.default, { reserved: totalReservedSpaces }),
		_react2.default.createElement(
			_reactRouterDom.NavLink,
			{ className: 'link', to: '/' },
			'Uraiqat'
		)
	);
};

exports.default = Main;