"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContentSubtitle = function PostContentSubtitle(_ref) {
  var content = _ref.content;
  return _react.default.createElement("h2", {
    className: "subtitle"
  }, content.content);
};

var _default = PostContentSubtitle;
exports.default = _default;