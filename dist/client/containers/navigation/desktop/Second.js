"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Second = function Second(props) {
  var location = props.location;
  var numberOfStaticItems = 'Architects'.length; // if not atelier, we don't have secondary navigation
  // just return the pattern with the reserved "Architects" work

  if (location.pathname !== '/atelier' && location.pathname !== '/atelier/about') {
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
      name: 'Portfolio',
      exact: location.pathname === '/atelier',
      id: 'portfolio',
      link: '/atelier',
      glyph: {
        className: 'ind',
        content: '->'
      },
      size: 'Portfolio'.length
    }, {
      name: 'About',
      id: 'about',
      exact: location.pathname === '/atelier/about',
      link: '/atelier/about',
      glyph: {
        className: 'ind',
        content: '->'
      },
      size: 'About'.length
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
        glyph = _ref.glyph,
        id = _ref.id,
        link = _ref.link,
        exact = _ref.exact;
    return _react.default.createElement("span", {
      key: "header__link-chunk--".concat(index + 1),
      className: "header__link-chunk"
    }, _react.default.createElement("span", {
      className: "ws"
    }, "-"), _react.default.createElement(_reactRouterDom.NavLink, {
      activeClassName: "active",
      className: "link menu-link ".concat(typeof exact !== 'undefined' && exact ? '' : 'not-exact'),
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
  }), _react.default.createElement(_reactRouterDom.NavLink, {
    className: "link",
    to: "/"
  }, "Architects"));
};

var _default = (0, _reactRouterDom.withRouter)(Second);

exports.default = _default;