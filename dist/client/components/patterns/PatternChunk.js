'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chunk = function Chunk(_ref) {
	var noOfGlyphs = _ref.noOfGlyphs;

	var count = 1;

	var generatePattern = function generatePattern() {
		var pattern = '';
		var glyphs = ['-', '-', '/', '-', '-', '|', '-', '>', '-', '<', '-', '|', '-', '-', '|', '-', '|', '-', '/', '-', '-', '-', '/', '-', '-'];
		for (count; count <= noOfGlyphs; count++) {
			pattern += (0, _helpers.getRandomGlyph)(glyphs);
		}
		return pattern;
	};
	return _react2.default.createElement(
		'span',
		{ className: 'glyphs-chunk' },
		generatePattern()
	);
};

var PatternChunkFixed = function PatternChunkFixed(_ref2) {
	var fixed = _ref2.fixed;
	return _react2.default.createElement(Chunk, { noOfGlyphs: fixed });
};

var PatternChunkReserved = function PatternChunkReserved(_ref3) {
	var reserved = _ref3.reserved,
	    adjust = _ref3.adjust;

	var maxWidth = (0, _helpers.getMaxWidth)();
	var config = {
		w: maxWidth,
		h: 1
	};

	var maxNoOfChars = (0, _helpers.getNoOfChars)('navigation', config, adjust);

	var noOfAllowedChars = maxNoOfChars.x - reserved;

	if (noOfAllowedChars <= 0) {
		return null;
	}
	return _react2.default.createElement(Chunk, { where: 'navigation', noOfGlyphs: noOfAllowedChars });
};

var PatternChunk = function PatternChunk(_ref4) {
	var fixed = _ref4.fixed,
	    reserved = _ref4.reserved,
	    adjust = _ref4.adjust;

	return typeof fixed !== 'undefined' ? _react2.default.createElement(PatternChunkFixed, { fixed: fixed }) : _react2.default.createElement(PatternChunkReserved, { reserved: reserved, adjust: adjust });
};

exports.default = PatternChunk;