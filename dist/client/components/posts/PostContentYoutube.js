"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _YoutubeComponent = _interopRequireDefault(require("../media/YoutubeComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContentMedia = function PostContentMedia(_ref) {
  var content = _ref.content;

  if (typeof content === 'undefined') {
    return null;
  }

  return _react.default.createElement("div", {
    className: "post__media post__media--video"
  }, _react.default.createElement("div", {
    className: "post__media__video-wrapper"
  }, _react.default.createElement(_YoutubeComponent.default, {
    classes: "post__media__video",
    autplay: 0,
    videoId: content.youtubeId
  })));
};

var _default = PostContentMedia;
exports.default = _default;