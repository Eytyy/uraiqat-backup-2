"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Post = _interopRequireDefault(require("../home/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Content = function Content(_ref) {
  var content = _ref.content;
  return content.map(function (post) {
    return _react.default.createElement(_Post.default, _extends({}, post, {
      id: post.id,
      key: post.id
    }));
  });
};

var LandingFeatured = function LandingFeatured(_ref2) {
  var content = _ref2.content,
      page = _ref2.page;

  if (typeof content === 'undefined' || content.length === 0) {
    return null;
  }

  return _react.default.createElement("section", {
    className: "landing-section landing-section--featured"
  }, _react.default.createElement(Content, {
    content: content,
    page: page
  }));
};

var _default = LandingFeatured;
exports.default = _default;