'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PatternChunk = require('../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

var _HeaderMNavItem = require('./HeaderMNavItem');

var _HeaderMNavItem2 = _interopRequireDefault(_HeaderMNavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderDTMain = function HeaderDTMain(_ref) {
	var navigation = _ref.navigation;

	return _react2.default.createElement(
		'div',
		{ className: 'header--mobile__main' },
		navigation.map(function (_ref2, index) {
			var link = _ref2.link,
			    glyph = _ref2.glyph,
			    name = _ref2.name;
			return _react2.default.createElement(
				'div',
				{ key: 'mobile-link--' + index, className: 'header-mobile__main__item' },
				_react2.default.createElement(_HeaderMNavItem2.default, { name: name, link: link, glyph: glyph }),
				_react2.default.createElement(_PatternChunk2.default, { reserved: name.length + glyph.content.length + 2 })
			);
		}),
		_react2.default.createElement(_PatternChunk2.default, { reserved: 0 })
	);
};

exports.default = HeaderDTMain;