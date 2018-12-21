"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FiltersListItem = _interopRequireDefault(require("./FiltersListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FiltersList = function FiltersList(_ref) {
  var content = _ref.content,
      onFilterClick = _ref.onFilterClick,
      adjust = _ref.adjust;
  return _react.default.createElement("div", {
    className: "header-mobile__filters__list"
  }, content.map(function (_ref2) {
    var title = _ref2.title,
        id = _ref2.id,
        active = _ref2.active;
    return _react.default.createElement(_FiltersListItem.default, {
      adjust: adjust,
      key: id,
      onFilterClick: onFilterClick,
      content: title,
      id: id,
      active: active
    });
  }));
};

var _default = FiltersList;
exports.default = _default;