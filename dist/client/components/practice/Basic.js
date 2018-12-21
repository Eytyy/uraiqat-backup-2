"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BodyText = _interopRequireDefault(require("../BodyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Basic = function Basic(_ref) {
  var sectionTitle = _ref.sectionTitle,
      content = _ref.content;
  return _react.default.createElement("section", {
    className: "practice-section practice-section--".concat(sectionTitle)
  }, _react.default.createElement("h2", {
    className: "practice-section__title"
  }, sectionTitle), _react.default.createElement("div", {
    className: "practice-section__inner"
  }, _react.default.createElement(_BodyText.default, {
    content: content
  })));
};

var _default = Basic;
exports.default = _default;