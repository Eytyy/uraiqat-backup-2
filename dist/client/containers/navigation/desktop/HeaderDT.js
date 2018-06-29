'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeaderDTMain = require('./HeaderDTMain');

var _HeaderDTMain2 = _interopRequireDefault(_HeaderDTMain);

var _HeaderDTSecond = require('./HeaderDTSecond');

var _HeaderDTSecond2 = _interopRequireDefault(_HeaderDTSecond);

var _HeaderDTFilterSearch = require('./HeaderDTFilterSearch');

var _HeaderDTFilterSearch2 = _interopRequireDefault(_HeaderDTFilterSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderDT = function HeaderDT() {
	return _react2.default.createElement(
		'div',
		{ className: 'website-header__inner website-header__inner--desktop wrapper' },
		_react2.default.createElement(_HeaderDTMain2.default, null),
		_react2.default.createElement(_HeaderDTSecond2.default, null),
		_react2.default.createElement(_HeaderDTFilterSearch2.default, null)
	);
};

exports.default = HeaderDT;