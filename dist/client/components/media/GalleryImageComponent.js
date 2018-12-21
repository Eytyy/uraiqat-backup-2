"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GalleryImageComponent = function GalleryImageComponent(_ref) {
  var content = _ref.content;
  var file = content.file,
      description = content.description;
  var isImageLandscape = file.details.image.width > file.details.image.height + 100;
  var imageQuery = isImageLandscape ? "w=".concat(window.innerWidth) : "h=".concat(window.innerHeight);
  return _react.default.createElement("div", {
    className: "slide slide--image gallery__slide gallery__slide--".concat(isImageLandscape ? 'landscape' : 'portrait')
  }, _react.default.createElement("div", {
    className: "gallery__slide__content"
  }, _react.default.createElement("div", {
    className: "gallery__slide__image-wrapper"
  }, _react.default.createElement("img", {
    src: "".concat(file.url, "?fl=progressive&").concat(imageQuery)
  })), description && _react.default.createElement("div", {
    className: "slide-details"
  }, _react.default.createElement("div", {
    className: "slide-details__content"
  }, _react.default.createElement("div", {
    className: "slide-details__description"
  }, content.description)))));
};

var _default = GalleryImageComponent;
exports.default = _default;