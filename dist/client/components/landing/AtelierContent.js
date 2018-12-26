"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CommonProjectPreview = _interopRequireDefault(require("../projects/CommonProjectPreview"));

var _BodyText = _interopRequireDefault(require("../BodyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AtelierContent = function AtelierContent(props) {
  var visibleContent = props.visibleContent,
      intro = props.intro;
  return _react.default.createElement(_react.default.Fragment, null, intro && _react.default.createElement("section", {
    id: "about",
    className: "atelier-sub-section"
  }, _react.default.createElement("div", {
    className: "atelier-landing__top"
  }, _react.default.createElement("div", {
    className: "atelier-landing__top__desc"
  }, intro.desc && _react.default.createElement(_BodyText.default, {
    content: intro.desc
  })))), visibleContent && _react.default.createElement("section", {
    id: "portfolio",
    className: "atelier-sub-section"
  }, _react.default.createElement("div", {
    className: "atelier-section__inner"
  }, visibleContent.map(function (post) {
    return _react.default.createElement(_CommonProjectPreview.default, _extends({
      id: post.id,
      key: post.id
    }, post, {
      type: "atelier",
      category: post.category
    }));
  }))));
};

var _default = AtelierContent;
exports.default = _default;