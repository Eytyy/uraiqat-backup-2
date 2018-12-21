"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SlideImageComponent = _interopRequireDefault(require("./SlideImageComponent"));

var _SlideVideoComponent = _interopRequireDefault(require("./SlideVideoComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = function Slide(_ref) {
  var imagesQuery = _ref.imagesQuery,
      content = _ref.content,
      onClick = _ref.onClick,
      active = _ref.active,
      index = _ref.index,
      sliderName = _ref.sliderName;
  var isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
  return isMediaOfTypeImage ? _react.default.createElement(_SlideImageComponent.default, {
    sliderName: sliderName,
    active: active,
    onClick: onClick,
    imagesQuery: imagesQuery,
    content: content
  }) : _react.default.createElement(_SlideVideoComponent.default, {
    sliderName: sliderName,
    index: index,
    active: active,
    onClick: onClick,
    content: content
  });
};

var _default = Slide;
exports.default = _default;