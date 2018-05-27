'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PatternLine = require('./PatternLine');

var _PatternLine2 = _interopRequireDefault(_PatternLine);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternBlock = function PatternBlock(_ref) {
	var reservedContent = _ref.reservedContent,
	    inline = _ref.inline;

	if (typeof window === 'undefined') {
		return _react2.default.createElement('div', { className: 'pattern pattern--block' });
	}
	var windowSize = (0, _helpers.getWindowDimensions)();
	var maxWidth = (0, _helpers.getMaxWidth)();

	var font = (0, _helpers.getFontValues)();
	var config = {
		w: maxWidth,
		h: typeof inline === 'undefined' ? windowSize.h - font.characterHeight * 2 - font.characterHeight * 3 - font.characterHeight * 3 - font.characterHeight * reservedContent : windowSize.h - font.characterHeight * 3 - font.characterHeight * reservedContent
	};
	var numberOfLines = (0, _helpers.getNoOfChars)('loading', config);
	var fakeArray = Array(numberOfLines.y).fill('pl');

	return _react2.default.createElement(
		'div',
		{ className: 'pattern pattern--contact-block' },
		fakeArray.map(function (item, index) {
			return _react2.default.createElement(_PatternLine2.default, { key: 'pl-' + index, noOfChars: numberOfLines.x });
		})
	);
};

exports.default = PatternBlock;