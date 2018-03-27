'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternLine = function PatternLine(_ref) {
	var noOfChars = _ref.noOfChars;

	var count = 1;

	var generatePattern = function generatePattern() {
		var pattern = '';
		for (count; count <= noOfChars; count++) {
			pattern += (0, _helpers.getRandomGlyph)();
		}
		return pattern;
	};

	return _react2.default.createElement(
		'div',
		{ className: 'patternline' },
		generatePattern()
	);
};

exports.default = PatternLine;