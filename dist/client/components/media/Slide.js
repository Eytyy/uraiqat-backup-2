'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SlideImageComponent = require('./SlideImageComponent');

var _SlideImageComponent2 = _interopRequireDefault(_SlideImageComponent);

var _SlideVideoComponent = require('./SlideVideoComponent');

var _SlideVideoComponent2 = _interopRequireDefault(_SlideVideoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = function Slide(_ref) {
	var imagesQuery = _ref.imagesQuery,
	    content = _ref.content,
	    onClick = _ref.onClick,
	    active = _ref.active,
	    index = _ref.index,
	    sliderName = _ref.sliderName;

	var isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ? _react2.default.createElement(_SlideImageComponent2.default, {
		sliderName: sliderName,
		active: active,
		onClick: onClick,
		imagesQuery: imagesQuery,
		content: content }) : _react2.default.createElement(_SlideVideoComponent2.default, {
		sliderName: sliderName,
		index: index,
		active: active,
		onClick: onClick,
		content: content });
};

exports.default = Slide;