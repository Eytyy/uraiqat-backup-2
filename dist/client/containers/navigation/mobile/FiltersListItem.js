"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FiltersListItem = function FiltersListItem(_ref) {
  var content = _ref.content,
      active = _ref.active,
      onFilterClick = _ref.onFilterClick,
      id = _ref.id,
      adjust = _ref.adjust;

  var onClick = function onClick() {
    onFilterClick(id);
  };

  return _react.default.createElement("div", null, _react.default.createElement("span", {
    onClick: onClick,
    className: "filter link"
  }, active ? _react.default.createElement("span", {
    className: "filterBox"
  }, "[", _react.default.createElement("span", {
    className: "filterBox__state"
  }, "x"), "]") : _react.default.createElement("span", {
    className: "filterBox"
  }, "[", _react.default.createElement("span", {
    className: "filterBox__state"
  }, " "), "]"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", null, content), _react.default.createElement("span", {
    className: "ws"
  }, "-")), _react.default.createElement(_PatternChunk.default, {
    reserved: content.length + 5,
    adjust: adjust
  }));
};

var _default = FiltersListItem;
exports.default = _default;