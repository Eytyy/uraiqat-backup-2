"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PatternChunk = _interopRequireDefault(require("./patterns/PatternChunk"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ContactLineBlock = function ContactLineBlock(_ref2) {
  var label = _ref2.label,
      content = _ref2.content,
      type = _ref2.type,
      reserved = _ref2.reserved,
      _ref2$emptyContent = _ref2.emptyContent,
      emptyContent = _ref2$emptyContent === void 0 ? 0 : _ref2$emptyContent,
      adjust = _ref2.adjust;
  return _react.default.createElement("div", {
    className: "contact-line"
  }, label && _react.default.createElement("span", null, label), label && _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement(ContactAddressLineContent, {
    content: content,
    type: type
  }), _react.default.createElement("span", {
    className: "ws"
  }, "-"), _react.default.createElement(_PatternChunk.default, {
    reserved: reserved - emptyContent,
    adjust: adjust
  }));
};

var MultipleContactLineBlocks = function MultipleContactLineBlocks(_ref3) {
  var config = _ref3.config,
      type = _ref3.type,
      max = _ref3.max,
      adjust = _ref3.adjust;
  var content = config.content.split(/[ ,.]+/);
  var blocks = {};
  var limit = max;
  var count = 0;
  var emptyContent = 0;

  function appendTextToBlock(text) {
    if (blocks["block".concat(count)].length > 0) {
      blocks["block".concat(count)] += " ".concat(text);
      limit = limit - text.length - 1;
    } else {
      blocks["block".concat(count)] += text;
      limit = limit - text.length;
    }
  }

  function createNewLineBlock() {
    count = count + 1;
    limit = max;
    blocks["block".concat(count)] = '';
  }

  content.forEach(function (item) {
    if (item === '') {
      limit -= 1;
      emptyContent += 1;
      return;
    }

    if (limit && item.length < limit) {
      if (typeof blocks["block".concat(count)] !== 'undefined') {
        appendTextToBlock(item);
      } else {
        createNewLineBlock();
        appendTextToBlock(item);
      }
    } else {
      createNewLineBlock();
      appendTextToBlock(item);
    }
  });
  return Object.keys(blocks).map(function (key) {
    var singleReserve = blocks[key].length + 2;
    return _react.default.createElement(ContactLineBlock, {
      adjust: adjust,
      key: key,
      content: blocks[key],
      reserved: singleReserve,
      emptyContent: emptyContent,
      type: type
    });
  });
};

var ContactAddressLineMobile = function ContactAddressLineMobile(_ref4) {
  var config = _ref4.config,
      type = _ref4.type,
      adjust = _ref4.adjust;
  var reserved = config.totalLength;
  var maxWidth = (0, _helpers.getMaxWidth)();
  var windowConfig = {
    w: maxWidth,
    h: 1
  };
  var maxNoOfChars = (0, _helpers.getNoOfChars)('contact', windowConfig, adjust);

  if (typeof window === 'undefined') {
    return _react.default.createElement("div", {
      className: "contact-line"
    });
  }

  return maxNoOfChars.x <= reserved ? _react.default.createElement(MultipleContactLineBlocks, {
    adjust: adjust,
    config: config,
    type: type,
    reserved: reserved,
    max: maxNoOfChars.x
  }) : _react.default.createElement(ContactLineBlock, _extends({
    adjust: adjust
  }, config, {
    type: type,
    reserved: reserved
  }));
};

var _default = ContactAddressLineMobile;
exports.default = _default;