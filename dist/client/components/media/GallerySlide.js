"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _GalleryImageComponent = _interopRequireDefault(require("./GalleryImageComponent"));

var _GalleryVideoComponent = _interopRequireDefault(require("./GalleryVideoComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GallerySlide = function GallerySlide(_ref) {
  var imagesQuery = _ref.imagesQuery,
      content = _ref.content,
      index = _ref.index,
      activeSlide = _ref.activeSlide,
      title = _ref.title;
  var isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
  return isMediaOfTypeImage ? _react.default.createElement(_GalleryImageComponent.default, {
    title: title,
    index: index,
    classList: "slide slide--image",
    imagesQuery: imagesQuery,
    content: content
  }) : _react.default.createElement(_GalleryVideoComponent.default, {
    title: title,
    activeSlide: activeSlide,
    index: index,
    classList: "slide slide--video",
    content: content
  });
};

var _default = GallerySlide;
exports.default = _default;