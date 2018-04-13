'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PatternChunk = require('../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactAddressLine = function ContactAddressLine(_ref) {
	var config = _ref.config;

	var reserved = config.spaces + config.contentLength + 4;
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
		config.content,
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