"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Filter = _interopRequireDefault(require("./Filter"));

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = function Filters(_ref) {
  var content = _ref.content,
      fixedEnd = _ref.fixedEnd,
      fixedStart = _ref.fixedStart,
      onFilterClick = _ref.onFilterClick;
  return _react.default.createElement("div", {
    className: "filters"
  }, _react.default.createElement(_PatternChunk.default, {
    fixed: fixedStart
  }), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), content.map(function (_ref2) {
    var title = _ref2.title,
        id = _ref2.id,
        active = _ref2.active;
    return _react.default.createElement(_Filter.default, {
      onFilterClick: onFilterClick,
      key: id,
      content: title,
      id: id,
      active: active
    });
  }), _react.default.createElement(_PatternChunk.default, {
    fixed: content.leftOvers + fixedEnd
  }));
};

var _default = Filters;
exports.default = _default;