"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PatternChunk = _interopRequireDefault(require("../components/patterns/PatternChunk"));

var _ContactAddressLineMobile = _interopRequireDefault(require("../components/ContactAddressLineMobile"));

var _ContactMap = _interopRequireDefault(require("../containers/ContactMap"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactMobile = function ContactMobile(_ref) {
  var content = _ref.content,
      adjust = _ref.adjust;
  var coordinates = content.fields.googleMap;
  var _content$fields = content.fields,
      addressLine1 = _content$fields.addressLine1,
      addressLine2 = _content$fields.addressLine2,
      mobile = _content$fields.mobile,
      telephone = _content$fields.telephone,
      fax = _content$fields.fax,
      email = _content$fields.email;
  var fixedWhiteSpace = 1;
  var fixedLabelSize = 3;
  var addressLine1Config = {
    content: addressLine1,
    totalLength: addressLine1.length + fixedWhiteSpace
  };
  var addressLine2Config = {
    content: addressLine2,
    totalLength: addressLine1.length + fixedWhiteSpace
  };
  var telephoneConfig = {
    content: telephone,
    label: 'T:',
    totalLength: telephone.length + fixedLabelSize + fixedWhiteSpace
  };
  var mobileConfig = {
    content: mobile,
    label: 'M:',
    totalLength: mobile.length + fixedLabelSize + fixedWhiteSpace
  };
  var faxConfig = {
    content: fax,
    label: 'F:',
    totalLength: fax.length + fixedLabelSize + fixedWhiteSpace
  };
  var emailConfig = {
    content: email,
    totalLength: email.length + fixedWhiteSpace
  };
  var windowSize = (0, _helpers.getWindowDimensions)();
  var maxWidth = (0, _helpers.getMaxWidth)();
  var font = (0, _helpers.getFontValues)();

  var getMapheight = function getMapheight() {
    if (windowSize.h > 1024) {
      return 480;
    } else if (windowSize.h > 768) {
      return 390;
    }

    return 240;
  };

  var mapHeight = getMapheight();
  var config = {
    w: maxWidth,
    h: windowSize.h - font.characterHeight * 2
  };
  var mapConfig = {
    w: maxWidth,
    h: mapHeight
  };
  var headerLines = 2;
  var footerLines = 3;
  var fixedNumberOfContentLines = 10;
  var minimumNumberOfLines = (0, _helpers.getNoOfChars)('loading', config).y - headerLines - footerLines - fixedNumberOfContentLines;
  var numberOfEmptyLinesBeforeMap = 1;
  var mapLines = (0, _helpers.getNoOfChars)('loading', mapConfig).y + numberOfEmptyLinesBeforeMap;
  var fakeArray = mapLines > minimumNumberOfLines ? Array(mapLines).fill('pl') : Array(minimumNumberOfLines).fill('pl');
  return _react.default.createElement("section", {
    className: "landing-page landing-page--contact main-section"
  }, _react.default.createElement(_ContactAddressLineMobile.default, {
    adjust: adjust,
    type: "text",
    config: addressLine1Config
  }), _react.default.createElement(_ContactAddressLineMobile.default, {
    adjust: adjust,
    type: "text",
    config: addressLine2Config
  }), _react.default.createElement("div", {
    className: "contact-line"
  }, _react.default.createElement(_PatternChunk.default, {
    adjust: adjust,
    reserved: 0
  })), _react.default.createElement(_ContactAddressLineMobile.default, {
    adjust: adjust,
    type: "tel",
    config: telephoneConfig
  }), _react.default.createElement(_ContactAddressLineMobile.default, {
    adjust: adjust,
    type: "tel",
    config: faxConfig
  }), _react.default.createElement(_ContactAddressLineMobile.default, {
    adjust: adjust,
    type: "tel",
    config: mobileConfig
  }), _react.default.createElement("div", {
    className: "contact-line"
  }, _react.default.createElement(_PatternChunk.default, {
    adjust: adjust,
    reserved: 0
  })), _react.default.createElement(_ContactAddressLineMobile.default, {
    adjust: adjust,
    type: "email",
    config: emailConfig
  }), fakeArray.map(function (item, index) {
    return _react.default.createElement("div", {
      key: "pl-".concat(index),
      className: "contact-line"
    }, _react.default.createElement(_PatternChunk.default, {
      adjust: adjust,
      reserved: 0
    }));
  }), _react.default.createElement("div", {
    className: "contact__map-wrapper"
  }, typeof window === 'undefined' ? null : _react.default.createElement(_ContactMap.default, {
    lat: coordinates.lat,
    lng: coordinates.lon
  })));
};

var _default = ContactMobile;
exports.default = _default;