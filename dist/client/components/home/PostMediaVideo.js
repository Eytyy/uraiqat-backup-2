"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _VideoComponent = _interopRequireDefault(require("../media/VideoComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostMediaVideo = function PostMediaVideo(_ref) {
  var content = _ref.content,
      patternId = _ref.patternId;
  var videoClass = 'post-preview__video';
  return _react.default.createElement(_VideoComponent.default, {
    patternId: patternId,
    classList: videoClass,
    content: content
  });
};

var _default = PostMediaVideo;
exports.default = _default;