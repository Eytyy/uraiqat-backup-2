'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _Second = require('./Second');

var _Second2 = _interopRequireDefault(_Second);

var _FilterSearchWrapper = require('./FilterSearchWrapper');

var _FilterSearchWrapper2 = _interopRequireDefault(_FilterSearchWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
	return _react2.default.createElement(
		'div',
		{ className: 'website-header__inner website-header__inner--desktop wrapper' },
		_react2.default.createElement(_Main2.default, null),
		_react2.default.createElement(_Second2.default, null),
		_react2.default.createElement(_FilterSearchWrapper2.default, null)
	);
};

exports.default = Header;