"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostTags = function PostTags(_ref) {
  var content = _ref.content;
  return _react.default.createElement("div", {
    className: "post__meta post__categories"
  }, _react.default.createElement("span", {
    className: "label"
  }, "In "), _react.default.createElement("div", {
    className: "post__categories__list post__meta__item"
  }, content.map(function (tag, index) {
    return _react.default.createElement("span", {
      key: "tag-".concat(index),
      className: "post__categories__list__item"
    }, tag, index === content.length - 1 ? '.' : ', ');
  })));
};

var _default = PostTags;
exports.default = _default;