"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PostDefaultText = _interopRequireDefault(require("./PostDefaultText"));

var _PostDefaultMedia = _interopRequireDefault(require("./PostDefaultMedia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostDefault = function PostDefault(_ref) {
  var content = _ref.content;
  var previewThumbnail = content.previewThumbnail,
      previewThumbnailYoutube = content.previewThumbnailYoutube;
  return typeof previewThumbnail !== 'undefined' || previewThumbnailYoutube !== 'undefined' ? _react.default.createElement(_PostDefaultMedia.default, {
    content: content
  }) : _react.default.createElement(_PostDefaultText.default, {
    content: content
  });
};

var _default = PostDefault;
exports.default = _default;