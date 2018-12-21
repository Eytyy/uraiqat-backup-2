"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Main = _interopRequireDefault(require("./Main"));

var _Second = _interopRequireDefault(require("./Second"));

var _FilterSearchWrapper = _interopRequireDefault(require("./FilterSearchWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react.default.createElement("div", {
    className: "website-header__inner website-header__inner--desktop wrapper"
  }, _react.default.createElement(_Main.default, null), _react.default.createElement(_Second.default, null), _react.default.createElement(_FilterSearchWrapper.default, null));
};

var _default = Header;
exports.default = _default;