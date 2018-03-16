"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageComponent = function ImageComponent(_ref) {
	var src = _ref.src,
	    title = _ref.title;

	var style = {
		backgroundImage: "url('" + src + "')"
	};
	return _react2.default.createElement("div", { className: "post-preview__image", style: style });
};

exports.default = ImageComponent;