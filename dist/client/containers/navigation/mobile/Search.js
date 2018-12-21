"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _helpers = require("../../../helpers");

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(_ref) {
  var adjust = _ref.adjust,
      onSearchClick = _ref.onSearchClick,
      onSearchSubmit = _ref.onSearchSubmit,
      searchIsVisible = _ref.searchIsVisible;
  var config = {
    name: 'Search',
    glyph: {
      className: 'ind',
      content: ':'
    },
    searchInputSize: 19,
    spacesAfter: 4
  };
  var font = (0, _helpers.getFontValues)();
  var formStyle = {
    width: "".concat(config.searchInputSize * font.characterWidth, "px")
  };
  var reservedInputSpace = config.name.length + config.searchInputSize + config.spacesAfter;
  var reservedInactiveSpace = config.name.length + config.spacesAfter;
  return _react.default.createElement("div", {
    className: "search ".concat(searchIsVisible ? 'is-visible' : 'is-hidden', " header-mobile__search")
  }, _react.default.createElement("span", {
    className: "search-link link",
    onClick: onSearchClick
  }, config.name), searchIsVisible ? _react.default.createElement("span", {
    className: "link"
  }, config.glyph.content) : ' ', _react.default.createElement("span", {
    className: "ws"
  }, "-"), searchIsVisible ? _react.default.createElement("form", {
    onSubmit: onSearchSubmit,
    className: "search"
  }, _react.default.createElement("input", {
    style: formStyle,
    autoComplete: "off",
    name: "keyword",
    className: "search__input",
    type: "text",
    placeholder: "Enter keyword"
  }), _react.default.createElement(_PatternChunk.default, {
    adjust: adjust,
    reserved: reservedInputSpace - 1
  }), _react.default.createElement("span", {
    className: "link",
    onClick: onSearchClick
  }, "x")) : _react.default.createElement("span", {
    className: "header-mobile__search__glyphs"
  }, _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement(_PatternChunk.default, {
    adjust: adjust,
    reserved: reservedInactiveSpace
  })));
};

var _default = Search;
exports.default = _default;