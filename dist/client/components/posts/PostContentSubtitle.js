"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContentSubtitle = function PostContentSubtitle(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		"h2",
		{ className: "subtitle" },
		content.content
	);
};

exports.default = PostContentSubtitle;