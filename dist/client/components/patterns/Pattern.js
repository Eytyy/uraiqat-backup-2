"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PatternLine = _interopRequireDefault(require("./PatternLine"));

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pattern = function Pattern(_ref) {
  var sliderName = _ref.sliderName,
      patternconfig = _ref.patternconfig;

  if (typeof window === 'undefined') {
    return _react.default.createElement("div", {
      className: "pattern pattern--slider"
    });
  }

  var numberOfLines = (0, _helpers.getNoOfChars)(sliderName, patternconfig);
  var fakeArray = Array(numberOfLines.y).fill('pl');
  return _react.default.createElement("div", {
    className: "pattern pattern--slider"
  }, fakeArray.map(function (item, index) {
    return _react.default.createElement(_PatternLine.default, {
      key: "pl-".concat(index),
      noOfChars: numberOfLines.x
    });
  }));
};

var _default = Pattern;
exports.default = _default;