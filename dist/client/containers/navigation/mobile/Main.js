"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _AtelierNavigation = _interopRequireDefault(require("./AtelierNavigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main(_ref) {
  var navigation = _ref.navigation,
      adjust = _ref.adjust,
      path = _ref.path;
  return _react.default.createElement("div", {
    className: "header--mobile__main"
  }, navigation.map(function (_ref2, index) {
    var link = _ref2.link,
        glyph = _ref2.glyph,
        name = _ref2.name,
        id = _ref2.id;
    return id === '/atelier' || id === '/atelier/about' ? _react.default.createElement(_AtelierNavigation.default, {
      key: "mobile-link--".concat(index),
      adjust: adjust,
      link: link,
      glyph: glyph,
      name: name,
      id: id,
      path: path
    }) : _react.default.createElement("div", {
      key: "mobile-link--".concat(index),
      className: "header-mobile__main__item"
    }, _react.default.createElement(_NavItem.default, {
      adjust: adjust,
      name: name,
      link: link,
      glyph: glyph
    }), _react.default.createElement(_PatternChunk.default, {
      adjust: adjust,
      reserved: name.length + glyph.content.length + 2
    }));
  }), _react.default.createElement(_PatternChunk.default, {
    adjust: adjust,
    reserved: 0
  }));
};

var _default = Main;
exports.default = _default;