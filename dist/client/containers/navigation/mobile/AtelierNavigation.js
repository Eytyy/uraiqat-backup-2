"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var AtelierNavigation = function AtelierNavigation(props) {
  var adjust = props.adjust,
      link = props.link,
      glyph = props.glyph,
      name = props.name,
      path = props.path;
  var config = {
    spacesBefore: 1,
    spacesAfter: 3,
    separator: '/',
    items: [{
      name: 'Portfolio',
      exact: path === '/atelier',
      id: 'portfolio',
      link: '/atelier',
      glyph: {
        className: 'ind',
        content: '<-'
      },
      size: 'Portfolio'.length
    }, {
      name: 'About',
      exact: path === '/atelier/about',
      id: 'about',
      link: '/atelier/about',
      glyph: {
        className: 'ind',
        content: '<-'
      },
      size: 'About'.length
    }]
  };
  var reservedNavSpaces = config.items.reduce(function (current, next) {
    return current + next.size + next.glyph.content.length;
  }, 0);
  var reservedNavEmptySpaces = config.items.length * (config.spacesBefore + config.spacesAfter);
  var numberofNavSeparators = config.items.length - 1;
  var totalReservedSpaces = name.length + glyph.content.length + 2 + reservedNavSpaces + reservedNavEmptySpaces + numberofNavSeparators;
  return _react.default.createElement("div", {
    className: "header-mobile__main__item"
  }, _react.default.createElement(_NavItem.default, {
    adjust: adjust,
    name: name,
    link: link,
    glyph: glyph
  }), config.items.map(function (_ref, index) {
    var name = _ref.name,
        glyph = _ref.glyph,
        id = _ref.id,
        link = _ref.link,
        exact = _ref.exact;
    return _react.default.createElement(_react.Fragment, {
      key: id
    }, _react.default.createElement("span", {
      key: "header__link-chunk--".concat(index + 1),
      className: "header__link-chunk"
    }, _react.default.createElement("span", {
      className: "ws"
    }, "-"), _react.default.createElement(_NavItem.default, {
      exact: exact,
      adjust: adjust,
      name: name,
      link: link,
      glyph: glyph
    }), _react.default.createElement("span", {
      className: "ws"
    }, "-"), _react.default.createElement("span", {
      className: "ws"
    }, "-"), _react.default.createElement("span", {
      className: "ws"
    }, "-"), index < config.items.length - 1 && _react.default.createElement("span", {
      className: "separator"
    }, '/')));
  }), _react.default.createElement(_PatternChunk.default, {
    adjust: adjust,
    reserved: totalReservedSpaces
  }));
};

var _default = AtelierNavigation;
exports.default = _default;