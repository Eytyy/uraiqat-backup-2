'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _HeaderDTMainNav = require('./HeaderDTMainNav');

var _HeaderDTMainNav2 = _interopRequireDefault(_HeaderDTMainNav);

var _HeaderPatternChunk = require('./HeaderPatternChunk');

var _HeaderPatternChunk2 = _interopRequireDefault(_HeaderPatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderDTMain = function HeaderDTMain() {
	var numberOfStaticItems = 'U'.length + 'Uraiqat'.length;
	var fixedStart = 10;
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
		_react2.default.createElement(_HeaderPatternChunk2.default, { fixed: fixedStart }),
		_react2.default.createElement(_HeaderDTMainNav2.default, { config: config }),
		_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: totalReservedSpaces }),
		_react2.default.createElement(
			_reactRouterDom.NavLink,
			{ className: 'link', to: '/' },
			'Uraiqat'
		)
	);
};

exports.default = HeaderDTMain;