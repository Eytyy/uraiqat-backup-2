"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = function Filter(_ref) {
  var content = _ref.content,
      active = _ref.active,
      onFilterClick = _ref.onFilterClick,
      id = _ref.id;

  var onClick = function onClick() {
    onFilterClick(id);
  };

  return _react.default.createElement("span", {
    onClick: onClick,
    className: "filter link"
  }, active && _react.default.createElement("span", {
    className: "filterBox"
  }, "[", _react.default.createElement("span", {
    className: "filterBox__state"
  }, "x"), "]") || _react.default.createElement("span", {
    className: "filterBox"
  }, "[", _react.default.createElement("span", {
    className: "filterBox__state"
  }, " "), "]"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", null, content), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "ws"
  }, "-"));
};

var _default = Filter;
exports.default = _default;