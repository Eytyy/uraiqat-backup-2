"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FiltersToggle = function FiltersToggle(_ref) {
  var config = _ref.config,
      filtersAreVisible = _ref.filtersAreVisible,
      onToggle = _ref.onToggle;
  return _react.default.createElement("span", {
    className: "filters"
  }, _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "link",
    onClick: onToggle
  }, filtersAreVisible ? '-' : config.glyph.content, config.name), _react.default.createElement("span", {
    className: filtersAreVisible ? 'ind ind--list' : 'ind ind--list is-hidden'
  }, ":"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "separator"
  }, '/'));
};

var _default = FiltersToggle;
exports.default = _default;