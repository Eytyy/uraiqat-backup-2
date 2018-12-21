"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PatternChunk = _interopRequireDefault(require("../components/patterns/PatternChunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactAddressLineContent = function ContactAddressLineContent(_ref) {
  var type = _ref.type,
      content = _ref.content;

  switch (type) {
    case 'tel':
      return _react.default.createElement("a", {
        className: "link",
        href: "tel:".concat(content)
      }, content);

    case 'email':
      return _react.default.createElement("a", {
        className: "link",
        href: "mailto:".concat(content)
      }, content);

    default:
      return _react.default.createElement("span", {
        className: "blue"
      }, content);
  }
};

var ContactAddressLine = function ContactAddressLine(_ref2) {
  var config = _ref2.config,
      type = _ref2.type;
  var fixedStart = 3;
  var reserved = config.totalLength + fixedStart;

  if (typeof window === 'undefined') {
    return _react.default.createElement("div", {
      className: "contact-line"
    });
  }

  return _react.default.createElement("div", {
    className: "contact-line"
  }, _react.default.createElement(_PatternChunk.default, {
    fixed: fixedStart
  }), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), config.label && _react.default.createElement("span", null, config.label), config.label && _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement(ContactAddressLineContent, {
    content: config.content,
    type: type
  }), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement(_PatternChunk.default, {
    reserved: reserved
  }));
};

var _default = ContactAddressLine;
exports.default = _default;