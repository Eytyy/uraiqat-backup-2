"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PatternLine = _interopRequireDefault(require("./PatternLine"));

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternBlock = function PatternBlock(_ref) {
  var reservedContent = _ref.reservedContent,
      inline = _ref.inline;

  if (typeof window === 'undefined') {
    return _react.default.createElement("div", {
      className: "pattern pattern--block"
    });
  }

  var windowSize = (0, _helpers.getWindowDimensions)();
  var maxWidth = (0, _helpers.getMaxWidth)();
  var font = (0, _helpers.getFontValues)();
  var config = {
    w: maxWidth,
    h: typeof inline === 'undefined' ? windowSize.h - font.characterHeight * 2 - font.characterHeight * 3 - font.characterHeight * 3 - font.characterHeight * reservedContent : windowSize.h - font.characterHeight * 3 - font.characterHeight * reservedContent
  };
  var numberOfLines = (0, _helpers.getNoOfChars)('loading', config);
  var fakeArray = Array(numberOfLines.y).fill('pl');
  return _react.default.createElement("div", {
    className: "pattern pattern--contact-block"
  }, fakeArray.map(function (item, index) {
    return _react.default.createElement(_PatternLine.default, {
      key: "pl-".concat(index),
      noOfChars: numberOfLines.x
    });
  }));
};

var _default = PatternBlock;
exports.default = _default;