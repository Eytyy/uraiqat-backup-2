"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

var _FiltersList = _interopRequireDefault(require("./FiltersList"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = function Filter(_ref) {
  var content = _ref.content,
      location = _ref.location,
      adjustForMobile = _ref.adjustForMobile,
      onToggle = _ref.onToggle,
      onClearFilters = _ref.onClearFilters,
      onFilterClick = _ref.onFilterClick,
      filtersAreVisible = _ref.filtersAreVisible;
  var config = {
    name: 'Filter',
    glyph: {
      className: 'ind',
      content: 'clear'
    },
    spacesAfter: 4
  };
  var reservedFilterSize = location.pathname !== '/' ? 0 : config.name.length + config.spacesAfter;
  var activeFiltersLength = content.filter(function (_ref2) {
    var active = _ref2.active;
    return active;
  }).length;
  var glyphSize = filtersAreVisible && activeFiltersLength ? config.glyph.content.length : 0;
  return reservedFilterSize !== 0 && _react.default.createElement("div", {
    className: "header-mobile__filters"
  }, _react.default.createElement("span", {
    className: "link",
    onClick: onToggle
  }, config.name), filtersAreVisible ? ':' : _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement(_PatternChunk.default, {
    reserved: reservedFilterSize + glyphSize,
    adjust: adjustForMobile
  }), filtersAreVisible && activeFiltersLength ? _react.default.createElement("span", {
    onClick: onClearFilters,
    className: "link"
  }, " ", config.glyph.content) : '<', filtersAreVisible && _react.default.createElement(_FiltersList.default, {
    onFilterClick: onFilterClick,
    content: content,
    adjust: adjustForMobile
  }));
};

var _default = (0, _reactRouterDom.withRouter)(Filter);

exports.default = _default;