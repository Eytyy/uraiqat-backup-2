"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BodyText = _interopRequireDefault(require("../BodyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContentText = function PostContentText(_ref) {
  var content = _ref.content;
  return _react.default.createElement(_BodyText.default, {
    content: content.content
  });
};

var _default = PostContentText;
exports.default = _default;