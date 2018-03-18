'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommaSpearatedList = function CommaSpearatedList(_ref) {
	var content = _ref.content,
	    listClass = _ref.listClass,
	    itemClass = _ref.itemClass;

	return _react2.default.createElement('div', { className: listClass });
};

exports.default = CommaSpearatedList;