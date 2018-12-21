"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Slider = _interopRequireDefault(require("../../containers/Slider"));

var _FlexibleImageComponent = _interopRequireDefault(require("../media/FlexibleImageComponent"));

var _VideoComponent = _interopRequireDefault(require("../media/VideoComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContentMedia = function PostContentMedia(_ref) {
  var content = _ref.content,
      id = _ref.id;

  if (typeof content === 'undefined') {
    return null;
  }

  if (content.files.length > 1) {
    return _react.default.createElement(_Slider.default, {
      sliderName: "post-slider",
      sliderId: id,
      classList: "post__media",
      imagesQuery: '?fl=progressive&w=882',
      content: content.files
    });
  }

  var singleContent = content.files[0];
  var isMediaOfTypeImage = RegExp('image').test(singleContent.fields.file.contentType);
  return isMediaOfTypeImage ? _react.default.createElement(_FlexibleImageComponent.default, {
    content: content.files[0]
  }) : _react.default.createElement("div", {
    className: "post__media post__media--video"
  }, _react.default.createElement("div", {
    className: "post__media__video-wrapper"
  }, _react.default.createElement(_VideoComponent.default, {
    classList: "post__media__video",
    patternId: "post-media--video",
    content: singleContent
  })), singleContent.fields.description && _react.default.createElement("div", {
    className: "post__media__caption"
  }, singleContent.fields.description));
};

var _default = PostContentMedia;
exports.default = _default;