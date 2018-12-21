"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _googleMapsReact = require("google-maps-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ContactMap =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactMap, _React$Component);

  function ContactMap() {
    _classCallCheck(this, ContactMap);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContactMap).apply(this, arguments));
  }

  _createClass(ContactMap, [{
    key: "render",
    value: function render() {
      var style = {
        width: '100%',
        height: '100%',
        'marginLeft': 'auto',
        'marginRight': 'auto'
      };
      var _this$props = this.props,
          lat = _this$props.lat,
          lng = _this$props.lng;
      return _react.default.createElement(_googleMapsReact.Map, {
        item: true,
        style: style,
        google: this.props.google,
        zoom: 17,
        initialCenter: {
          lat: lat,
          lng: lng
        },
        mapTypeId: 'satellite'
      }, _react.default.createElement(_googleMapsReact.Marker, {
        onClick: this.onMarkerClick,
        title: 'Uraiqat Architects',
        position: {
          lat: lat,
          lng: lng
        },
        name: 'Uraiqat Architects'
      }));
    }
  }]);

  return ContactMap;
}(_react.default.Component);

var _default = (0, _googleMapsReact.GoogleApiWrapper)({
  apiKey: 'AIzaSyCU1iC35hPcwTc5IBlJrcVpeYayJDE0BIc'
})(ContactMap);

exports.default = _default;