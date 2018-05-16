'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PatternChunk = require('./patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactAddressLineContent = function ContactAddressLineContent(_ref) {
	var type = _ref.type,
	    content = _ref.content;

	switch (type) {
		case 'tel':
			return _react2.default.createElement(
				'a',
				{ className: 'link', href: 'tel:' + content },
				content
			);
		case 'email':
			return _react2.default.createElement(
				'a',
				{ className: 'link', href: 'mailto:' + content },
				content
			);
		default:
			return _react2.default.createElement(
				'span',
				{ className: 'blue' },
				content
			);
	}
};

var ContactLineBlock = function ContactLineBlock(_ref2) {
	var label = _ref2.label,
	    content = _ref2.content,
	    type = _ref2.type,
	    reserved = _ref2.reserved,
	    _ref2$emptyContent = _ref2.emptyContent,
	    emptyContent = _ref2$emptyContent === undefined ? 0 : _ref2$emptyContent;

	return _react2.default.createElement(
		'div',
		{ className: 'contact-line' },
		label && _react2.default.createElement(
			'span',
			null,
			label
		),
		label && _react2.default.createElement(
			'span',
			{ className: 'ws' },
			'-'
		),
		_react2.default.createElement(ContactAddressLineContent, { content: content, type: type }),
		_react2.default.createElement(
			'span',
			{ className: 'ws' },
			'-'
		),
		_react2.default.createElement(_PatternChunk2.default, { reserved: reserved - emptyContent })
	);
};

var MultipleContactLineBlocks = function MultipleContactLineBlocks(_ref3) {
	var config = _ref3.config,
	    type = _ref3.type,
	    max = _ref3.max;

	var content = config.content.split(/[ ,.]+/);
	var blocks = {};
	var limit = max;
	var count = 0;
	var emptyContent = 0;

	function appendTextToBlock(text) {
		if (blocks['block' + count].length > 0) {
			blocks['block' + count] += ' ' + text;
			limit = limit - text.length - 1;
		} else {
			blocks['block' + count] += text;
			limit = limit - text.length;
		}
	}

	function createNewLineBlock() {
		count = count + 1;
		limit = max;
		blocks['block' + count] = '';
	}

	content.forEach(function (item) {
		if (item === '') {
			limit -= 1;
			emptyContent += 1;
			return;
		}
		if (limit && item.length < limit) {
			if (typeof blocks['block' + count] !== 'undefined') {
				appendTextToBlock(item);
			} else {
				createNewLineBlock();
				appendTextToBlock(item);
			}
		} else {
			createNewLineBlock();
			appendTextToBlock(item);
		}
	});
	return Object.keys(blocks).map(function (key) {
		var singleReserve = blocks[key].length + 2;
		return _react2.default.createElement(ContactLineBlock, { key: key, content: blocks[key], reserved: singleReserve, emptyContent: emptyContent, type: type });
	});
};

var ContactAddressLineMobile = function ContactAddressLineMobile(_ref4) {
	var config = _ref4.config,
	    type = _ref4.type;

	var reserved = config.totalLength;
	var maxWidth = (0, _helpers.getMaxWidth)();
	var windowConfig = {
		w: maxWidth,
		h: 1
	};
	var maxNoOfChars = (0, _helpers.getNoOfChars)('contact', windowConfig);

	if (typeof window === 'undefined') {
		return _react2.default.createElement('div', { className: 'contact-line' });
	}
	return maxNoOfChars.x <= reserved ? _react2.default.createElement(MultipleContactLineBlocks, { config: config, type: type, reserved: reserved, max: maxNoOfChars.x }) : _react2.default.createElement(ContactLineBlock, _extends({}, config, { type: type, reserved: reserved }));
};

exports.default = ContactAddressLineMobile;