"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainNav = function MainNav(_ref) {
  var config = _ref.config;
  return _react.default.createElement("nav", {
    className: "header--desktop__main__nav"
  }, config.items.map(function (_ref2, index) {
    var name = _ref2.name,
        link = _ref2.link,
        glyph = _ref2.glyph;
    return _react.default.createElement("span", {
      key: "header__link-chunk--".concat(index + 1),
      className: "header__link-chunk"
    }, _react.default.createElement("span", {
      className: "ws"
    }, "-"), _react.default.createElement(_reactRouterDom.NavLink, {
      activeClassName: "active",
      className: "link menu-link",
      to: link
    }, _react.default.createElement("span", {
      className: glyph.className
    }, glyph.content), name), _react.default.createElement("span", {
      className: "ws"
    }, "-"), _react.default.createElement("span", {
      className: "ws"
    }, "-"), _react.default.createElement("span", {
      className: "ws"
    }, "-"), index < config.items.length - 1 && _react.default.createElement("span", {
      className: "separator"
    }, '/'));
  }));
};

var _default = MainNav;
exports.default = _default;