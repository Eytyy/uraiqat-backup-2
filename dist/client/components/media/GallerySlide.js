'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GalleryImageComponent = require('./GalleryImageComponent');

var _GalleryImageComponent2 = _interopRequireDefault(_GalleryImageComponent);

var _GalleryVideoComponent = require('./GalleryVideoComponent');

var _GalleryVideoComponent2 = _interopRequireDefault(_GalleryVideoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GallerySlide = function GallerySlide(_ref) {
	var imagesQuery = _ref.imagesQuery,
	    content = _ref.content,
	    index = _ref.index,
	    activeSlide = _ref.activeSlide,
	    title = _ref.title;

	var isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ? _react2.default.createElement(_GalleryImageComponent2.default, {
		title: title,
		index: index,
		classList: 'slide slide--image',
		imagesQuery: imagesQuery, content: content
	}) : _react2.default.createElement(_GalleryVideoComponent2.default, {
		title: title,
		activeSlide: activeSlide,
		index: index,
		classList: 'slide slide--video', content: content
	});
};

exports.default = GallerySlide;