'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PatternChunk = require('../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

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
				{ className: 'link' },
				content
			);
	}
};
var ContactAddressLine = function ContactAddressLine(_ref2) {
	var config = _ref2.config,
	    type = _ref2.type;

	var reserved = config.totalLength + 4;
	if (typeof window === 'undefined') {
		return _react2.default.createElement('div', { className: 'contact-line' });
	}
	return _react2.default.createElement(
		'div',
		{ className: 'contact-line' },
		_react2.default.createElement(_PatternChunk2.default, { fixed: 4 }),
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
		config.label && _react2.default.createElement(
			'span',
			null,
			config.label
		),
		config.label && _react2.default.createElement(
			'span',
			{ className: 'ws' },
			'-'
		),
		_react2.default.createElement(ContactAddressLineContent, { content: config.content, type: type }),
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
		_react2.default.createElement(_PatternChunk2.default, { reserved: reserved })
	);
};

exports.default = ContactAddressLine;