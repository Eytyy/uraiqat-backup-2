"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactYoutube = _interopRequireDefault(require("react-youtube"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YoutubeComponent = function YoutubeComponent(_ref) {
  var videoId = _ref.videoId,
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? 0 : _ref$autoplay,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? 1 : _ref$controls;
  var opts = {
    height: '390',
    width: '640',
    playerVars: {
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      playsinline: 1,
      autoplay: autoplay,
      controls: controls
    }
  };
  return _react.default.createElement(_reactYoutube.default, {
    videoId: videoId,
    id: videoId,
    className: "video",
    containerClassName: "youtube-video-wrapper ".concat(classes),
    opts: opts
  });
};

var _default = YoutubeComponent;
exports.default = _default;