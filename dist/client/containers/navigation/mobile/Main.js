'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PatternChunk = require('../../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderDTMain = function HeaderDTMain(_ref) {
	var navigation = _ref.navigation,
	    adjust = _ref.adjust;

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
				_react2.default.createElement(_NavItem2.default, { adjust: adjust, name: name, link: link, glyph: glyph }),
				_react2.default.createElement(_PatternChunk2.default, { adjust: adjust, reserved: name.length + glyph.content.length + 2 })
			);
		}),
		_react2.default.createElement(_PatternChunk2.default, { adjust: adjust, reserved: 0 })
	);
};

exports.default = HeaderDTMain;