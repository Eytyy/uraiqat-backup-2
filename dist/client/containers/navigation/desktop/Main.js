"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _MainNav = _interopRequireDefault(require("./MainNav"));

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
  var numberOfStaticItems = 'U'.length + 'Uraiqat'.length;
  var fixedStart = window.innerWidth >= 1280 ? 10 : 7;
  var config = {
    spacesBefore: 1,
    spacesAfter: 3,
    separator: '/',
    items: [{
      name: 'Practice',
      link: '/practice',
      glyph: {
        className: 'ind',
        content: '->'
      },
      size: 'Practice'.length
    }, {
      name: 'Work',
      link: '/work',
      glyph: {
        className: 'ind',
        content: '->'
      },
      size: 'Work'.length
    }, {
      name: 'The Atelier',
      link: '/atelier',
      glyph: {
        className: 'ind',
        content: '->'
      },
      size: 'The Atelier'.length
    }, {
      name: 'Contact',
      link: '/contact',
      glyph: {
        className: 'ind',
        content: '->'
      },
      size: 'Contact'.length
    }]
  };
  var reservedNavSpaces = config.items.reduce(function (current, next) {
    return current + next.size + next.glyph.content.length;
  }, 0);
  var reservedNavEmptySpaces = config.items.length * (config.spacesBefore + config.spacesAfter);
  var numberofNavSeparators = config.items.length - 1;
  var totalReservedSpaces = reservedNavSpaces + reservedNavEmptySpaces + numberofNavSeparators + numberOfStaticItems + fixedStart;
  return _react.default.createElement("div", {
    className: "header--desktop__main"
  }, _react.default.createElement(_reactRouterDom.NavLink, {
    className: "link",
    to: "/"
  }, "U"), _react.default.createElement(_PatternChunk.default, {
    fixed: fixedStart
  }), _react.default.createElement(_MainNav.default, {
    config: config
  }), _react.default.createElement(_PatternChunk.default, {
    reserved: totalReservedSpaces
  }), _react.default.createElement(_reactRouterDom.NavLink, {
    className: "link",
    to: "/"
  }, "Uraiqat"));
};

var _default = Main;
exports.default = _default;