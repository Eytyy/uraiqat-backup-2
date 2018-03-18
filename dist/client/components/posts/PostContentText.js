'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BodyText = require('../BodyText');

var _BodyText2 = _interopRequireDefault(_BodyText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContentText = function PostContentText(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(_BodyText2.default, { content: content.content });
};

exports.default = PostContentText;