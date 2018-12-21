"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _actions = require("../actions");

var _reducers = require("../reducers");

var _LoadingPattern = _interopRequireDefault(require("../components/patterns/LoadingPattern"));

var _PatternChunk = _interopRequireDefault(require("../components/patterns/PatternChunk"));

var _PatternBlock = _interopRequireDefault(require("../components/patterns/PatternBlock"));

var _ContactAddressLine = _interopRequireDefault(require("../components/ContactAddressLine"));

var _ContactMobile = _interopRequireDefault(require("../components/ContactMobile"));

var _ContactMap = _interopRequireDefault(require("./ContactMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fetchContact = this.props.fetchContact;
      return fetchContact();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isFetching = _this$props.isFetching,
          content = _this$props.content,
          configs = _this$props.configs;
      var adjustForMobile = configs.adjustForMobile;

      if (isFetching && content.length === 0 || typeof content.fields === 'undefined') {
        return _react.default.createElement("div", {
          className: "loader"
        }, _react.default.createElement(_LoadingPattern.default, null));
      }

      var coordinates = content.fields.googleMap;
      var _content$fields = content.fields,
          addressLine1 = _content$fields.addressLine1,
          addressLine2 = _content$fields.addressLine2,
          mobile = _content$fields.mobile,
          telephone = _content$fields.telephone,
          fax = _content$fields.fax,
          email = _content$fields.email;
      var spaceBeforeAfter = 4;
      var addressLine1Config = {
        content: addressLine1,
        totalLength: addressLine1.length + spaceBeforeAfter
      };
      var addressLine2Config = {
        content: addressLine2,
        totalLength: addressLine1.length + spaceBeforeAfter
      };
      var telephoneConfig = {
        content: telephone,
        label: 'T:',
        totalLength: telephone.length + spaceBeforeAfter + 3
      };
      var mobileConfig = {
        content: mobile,
        label: 'M:',
        totalLength: mobile.length + spaceBeforeAfter + 3
      };
      var faxConfig = {
        content: fax,
        label: 'F:',
        totalLength: fax.length + spaceBeforeAfter + 3
      };
      var emailConfig = {
        content: email,
        totalLength: email.length + spaceBeforeAfter
      };

      if (typeof window === 'undefined') {
        return _react.default.createElement("section", {
          className: "landing-page landing-page--contact main-section"
        });
      }

      if (window.innerWidth < 1024) {
        return _react.default.createElement(_ContactMobile.default, {
          adjust: adjustForMobile,
          content: content
        });
      }

      return _react.default.createElement("section", {
        className: "landing-page landing-page--contact main-section"
      }, _react.default.createElement("div", {
        className: "contact-line"
      }, _react.default.createElement(_PatternChunk.default, {
        reserved: 0
      })), _react.default.createElement("div", {
        className: "contact-line"
      }, _react.default.createElement(_PatternChunk.default, {
        reserved: 0
      })), _react.default.createElement(_ContactAddressLine.default, {
        type: "text",
        config: addressLine1Config
      }), _react.default.createElement(_ContactAddressLine.default, {
        type: "text",
        config: addressLine2Config
      }), _react.default.createElement("div", {
        className: "contact-line"
      }, _react.default.createElement(_PatternChunk.default, {
        reserved: 0
      })), _react.default.createElement(_ContactAddressLine.default, {
        type: "tel",
        config: telephoneConfig
      }), _react.default.createElement(_ContactAddressLine.default, {
        type: "tel",
        config: faxConfig
      }), _react.default.createElement(_ContactAddressLine.default, {
        type: "tel",
        config: mobileConfig
      }), _react.default.createElement("div", {
        className: "contact-line"
      }, _react.default.createElement(_PatternChunk.default, {
        reserved: 0
      })), _react.default.createElement(_ContactAddressLine.default, {
        type: "email",
        config: emailConfig
      }), _react.default.createElement(_PatternBlock.default, {
        reservedContent: 10
      }), _react.default.createElement("div", {
        className: "contact__map-wrapper"
      }, typeof window === 'undefined' ? null : _react.default.createElement(_ContactMap.default, {
        lat: coordinates.lat,
        lng: coordinates.lon
      })));
    }
  }], [{
    key: "fetchData",
    value: function fetchData(store) {
      return store.dispatch((0, _actions.fetchContact)());
    }
  }]);

  return Contact;
}(_react.Component);

Contact.propTypes = {
  isFetching: _propTypes.default.bool.isRequired,
  fetchContact: _propTypes.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFetching: (0, _reducers.isContactFetching)(state),
    content: (0, _reducers.getContactContent)(state),
    configs: (0, _reducers.getAppConfigs)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchContact: _actions.fetchContact
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Contact);

exports.default = _default;