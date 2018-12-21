"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternLine = function PatternLine(_ref) {
  var noOfChars = _ref.noOfChars;
  var count = 1;

  var generatePattern = function generatePattern() {
    var pattern = '';

    for (count; count <= noOfChars; count++) {
      pattern += (0, _helpers.getRandomGlyph)();
    }

    return pattern;
  };

  return _react.default.createElement("div", {
    className: "patternline"
  }, generatePattern());
};

var _default = PatternLine;
exports.default = _default;