"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Second = function Second(props) {
  var location = props.location;
  var numberOfStaticItems = 'Architects'.length; // if not atelier, we don't have secondary navigation
  // just return the pattern with the reserved "Architects" work

  if (location.pathname !== '/atelier') {
    return _react.default.createElement("div", {
      className: "header--desktop__main__second"
    }, _react.default.createElement(_PatternChunk.default, {
      reserved: numberOfStaticItems
    }), _react.default.createElement(_reactRouterDom.NavLink, {
      className: "link",
      to: "/"
    }, "Architects"));
  } // otherwise, render the atelier sub-navigation


  var atelierConfig = {
    spacesBefore: 1,
    spacesAfter: 3,
    separator: '/',
    items: [{
      name: 'About',
      id: '#about',
      link: '/atelier#about',
      glyph: {
        className: 'ind',
        content: '->'
      },
      size: 'About'.length
    }, {
      name: 'Portfolio',
      id: '#portfolio',
      link: '/atelier#portfolio',
      glyph: {
        className: 'ind',
        content: '->'
      },
      size: 'Portfolio'.length
    }]
  };
  var fixedStart = window.innerWidth >= 1280 ? 11 : 8;
  var reservedNavSpaces = atelierConfig.items.reduce(function (current, next) {
    return current + next.size + next.glyph.content.length;
  }, 0);
  var reservedNavEmptySpaces = atelierConfig.items.length * (atelierConfig.spacesBefore + atelierConfig.spacesAfter);
  var numberofNavSeparators = atelierConfig.items.length - 1;
  var totalReservedSpaces = reservedNavSpaces + reservedNavEmptySpaces + numberofNavSeparators + numberOfStaticItems + fixedStart;
  return _react.default.createElement("div", {
    className: "header--desktop__main__second"
  }, _react.default.createElement(_PatternChunk.default, {
    fixed: fixedStart
  }), atelierConfig.items.map(function (_ref, index) {
    var name = _ref.name,
        link = _ref.link,
        glyph = _ref.glyph,
        id = _ref.id;
    return _react.default.createElement("span", {
      key: "header__link-chunk--".concat(index + 1),
      className: "header__link-chunk"
    }, _react.default.createElement("span", {
      className: "ws"
    }, "-"), _react.default.createElement(_reactRouterDom.NavLink, {
      className: "link menu-link ".concat(location.hash === id ? 'active' : ''),
      to: link
    }, _react.default.createElement("span", {
      className: glyph.className
    }, glyph.content), name), _react.default.createElement("span", {
      className: "ws"
    }, "-"), _react.default.createElement("span", {
      className: "ws"
    }, "-"), _react.default.createElement("span", {
      className: "ws"
    }, "-"), index < atelierConfig.items.length - 1 && _react.default.createElement("span", {
      className: "separator"
    }, '/'));
  }), _react.default.createElement(_PatternChunk.default, {
    reserved: totalReservedSpaces
  }));
};

var _default = (0, _reactRouterDom.withRouter)(Second);

exports.default = _default;