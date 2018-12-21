"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Preview = _interopRequireDefault(require("../../Preview"));

var _helpers = require("../../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostFeaturedText = function PostFeaturedText(_ref) {
  var content = _ref.content;
  var id = content.id,
      category = content.category,
      date = content.date,
      title = content.title,
      previewText = content.previewText,
      externalPostUrl = content.externalPostUrl,
      externalPostSource = content.externalPostSource;
  return _react.default.createElement(_Preview.default, {
    classList: "post-preview post-preview--featured post-preview--text"
  }, _react.default.createElement(_reactRouterDom.Link, {
    className: "post-preview__link",
    to: "/journal/".concat(id)
  }, _react.default.createElement("div", {
    className: "post-preview__content"
  }, _react.default.createElement("div", {
    className: "post-preview__content__inner"
  }, (category || date) && _react.default.createElement("div", {
    className: "post-preview__meta"
  }, (0, _helpers.formatDate)(date), " ", _react.default.createElement("span", {
    className: "post-preview__meta__title"
  }, ' -> ', category.fields.title)), title && _react.default.createElement("h2", {
    className: "post-preview__title title"
  }, title), previewText && _react.default.createElement("div", {
    className: "post-preview__desc"
  }, _react.default.createElement("p", null, previewText))))), externalPostUrl && _react.default.createElement("div", {
    className: "post-preview__external-link"
  }, _react.default.createElement("a", {
    href: externalPostUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, '->', externalPostSource)));
};

var _default = PostFeaturedText;
exports.default = _default;