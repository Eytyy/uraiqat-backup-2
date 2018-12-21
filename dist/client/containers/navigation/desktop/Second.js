"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Second = function Second() {
  var numberOfStaticItems = 'Architects'.length;
  return _react.default.createElement("div", {
    className: "header--desktop__main__second"
  }, _react.default.createElement(_PatternChunk.default, {
    reserved: numberOfStaticItems
  }), _react.default.createElement(_reactRouterDom.NavLink, {
    className: "link",
    to: "/"
  }, "Architects"));
};

var _default = Second;
exports.default = _default;