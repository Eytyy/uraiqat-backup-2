'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeaderPatternChunk = require('./HeaderPatternChunk');

var _HeaderPatternChunk2 = _interopRequireDefault(_HeaderPatternChunk);

var _HeaderMNavItem = require('./HeaderMNavItem');

var _HeaderMNavItem2 = _interopRequireDefault(_HeaderMNavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderDTMain = function HeaderDTMain() {
	var config = {
		items: [{ name: 'Practice', link: '/practice', glyph: { className: 'ind', content: '<-' }, size: 'Practice'.length }, { name: 'Work', link: '/work', glyph: { className: 'ind', content: '<-' }, size: 'Work'.length }, { name: 'Atelier', link: '/atelier', glyph: { className: 'ind', content: '<-' }, size: 'Atelier'.length }, { name: 'Contact', link: '/contact', glyph: { className: 'ind', content: '<-' }, size: 'Contact'.length }]
	};
	return _react2.default.createElement(
		'div',
		{ className: 'header--mobile__main' },
		config.items.map(function (_ref, index) {
			var link = _ref.link,
			    glyph = _ref.glyph,
			    name = _ref.name;
			return _react2.default.createElement(
				'div',
				{ key: 'mobile-link--' + index, className: 'header-mobile__main__item' },
				_react2.default.createElement(_HeaderMNavItem2.default, { name: name, link: link, glyph: glyph }),
				_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: name.length + glyph.content.length + 2 })
			);
		}),
		_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: 0 })
	);
};

exports.default = HeaderDTMain;