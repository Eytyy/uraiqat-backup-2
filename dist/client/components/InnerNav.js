"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InnerNav = function InnerNav(_ref) {
  var prev = _ref.prev,
      next = _ref.next,
      type = _ref.type;
  return _react.default.createElement("aside", {
    className: "inner__nav"
  }, prev && _react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(type, "/").concat(prev.id),
    className: "inner__nav__item inner__nav__item--prev link"
  }, '<-', "Prev"), next && _react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(type, "/").concat(next.id),
    className: "inner__nav__item inner__nav__item--next link"
  }, "Next", '->'));
};

var _default = InnerNav;
exports.default = _default;