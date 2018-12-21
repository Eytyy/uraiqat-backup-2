"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _VideoComponent = _interopRequireDefault(require("./VideoComponent"));

var _ImageComponent = _interopRequireDefault(require("./ImageComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaComponent = function MediaComponent(_ref) {
  var media = _ref.media;
  var isMediaOfTypeImage = RegExp('image').test(media.fields.file.contentType);

  if (isMediaOfTypeImage) {
    return _react.default.createElement(_ImageComponent.default, {
      classList: "atelier-landing__image",
      patternId: "atelier-landing-media-image",
      src: media.fields.file.url,
      size: media.fields.file.details.image
    });
  } else {
    return _react.default.createElement(_VideoComponent.default, {
      classList: "atelier-landing__video",
      patternId: "atelier-landing-media-video",
      content: media
    });
  }
};

var _default = MediaComponent;
exports.default = _default;