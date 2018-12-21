"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PostDefault = _interopRequireDefault(require("./default/PostDefault"));

var _PostFeatured = _interopRequireDefault(require("./featured/PostFeatured"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(content) {
  var previewDisplaySize = content.previewDisplaySize;

  if (typeof content.title === 'undefined') {
    return null;
  }

  return previewDisplaySize === 'Featured' ? _react.default.createElement(_PostFeatured.default, {
    content: content
  }) : _react.default.createElement(_PostDefault.default, {
    content: content
  });
};

var _default = Post;
exports.default = _default;