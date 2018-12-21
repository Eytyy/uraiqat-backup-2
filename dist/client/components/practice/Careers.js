"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _BodyText = _interopRequireDefault(require("../BodyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Careers = function Careers(_ref) {
  var content = _ref.content,
      desc = _ref.desc;

  if (!content) {
    return null;
  }

  return _react.default.createElement("section", {
    className: "practice-section--careers practice-section"
  }, _react.default.createElement("h2", {
    className: "practice-section__title"
  }, "Careers"), _react.default.createElement("div", {
    className: "practice-section__inner"
  }, _react.default.createElement(_BodyText.default, {
    content: desc
  }), content.map(function (_ref2) {
    var sys = _ref2.sys,
        fields = _ref2.fields;
    var date = new Date(sys.createdAt);
    var formatedDate = "".concat(date.getDate(), "/").concat(date.getMonth() + 1, "/").concat(date.getFullYear());
    return _react.default.createElement("article", {
      key: sys.id,
      className: "career-preview"
    }, _react.default.createElement(_reactRouterDom.Link, {
      className: "link career-preview__link",
      to: "careers/".concat(sys.id)
    }, _react.default.createElement("time", {
      className: "career-preview__date",
      dateTime: sys.createdAt
    }, formatedDate), _react.default.createElement("span", {
      className: "sep"
    }, "->"), _react.default.createElement("h3", {
      className: "career-preview__title"
    }, fields.title)));
  })));
};

var _default = Careers;
exports.default = _default;