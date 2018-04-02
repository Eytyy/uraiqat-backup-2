'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../../helpers');

var _HeaderDT = require('./HeaderDT');

var _HeaderDT2 = _interopRequireDefault(_HeaderDT);

var _HeaderM = require('./HeaderM');

var _HeaderM2 = _interopRequireDefault(_HeaderM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
	if (typeof window === 'undefined') {
		return _react2.default.createElement('header', { className: 'website-header' });
	}
	var windowSize = (0, _helpers.getWindowDimensions)();
	return _react2.default.createElement(
		'header',
		{ className: 'website-header' },
		windowSize.w >= 1280 ? _react2.default.createElement(_HeaderDT2.default, null) : _react2.default.createElement(_HeaderM2.default, null)
	);
};

exports.default = Header;