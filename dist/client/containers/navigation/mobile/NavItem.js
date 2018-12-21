"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavItem = function NavItem(_ref) {
  var link = _ref.link,
      glyph = _ref.glyph,
      name = _ref.name;
  return _react.default.createElement(_reactRouterDom.NavLink, {
    activeClassName: "active",
    className: "link menu-link",
    to: link
  }, name, _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: glyph.className
  }, glyph.content), _react.default.createElement("span", {
    className: "ws"
  }, "-"));
};

var _default = NavItem;
exports.default = _default;