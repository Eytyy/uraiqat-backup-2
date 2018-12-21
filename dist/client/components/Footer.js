"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _PatternChunk = _interopRequireDefault(require("../components/patterns/PatternChunk"));

var _babelTypes = require("babel-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Footer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      width: 0,
      height: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateDimensions", function () {
      var width = window.innerWidth;
      var height = window.innerHeight;

      _this.setState({
        width: width,
        height: height
      });
    });

    return _this;
  }

  _createClass(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions);
    }
  }, {
    key: "render",
    value: function render() {
      var adjust = this.props.adjust;
      var social = [{
        name: 'instagram',
        spaceBeforeSeparator: 3,
        spaceAfterSeparator: 3,
        separator: '/',
        link: 'http://www.instagram.com'
      }, {
        name: 'facebook',
        link: 'http://www.facebook.com',
        separator: '',
        spaceBeforeSeparator: 3,
        spaceAfterSeparator: 3
      }];
      var reserved = 1 + social.reduce(function (curr, next) {
        if (next.separator) {
          return curr + next.name.length + next.separator.length + next.spaceBeforeSeparator + next.spaceAfterSeparator;
        }

        return curr + next.name.length + next.spaceBeforeSeparator;
      }, 0);
      return typeof window === 'undefined' ? _react.default.createElement("footer", {
        className: "website-footer"
      }) : _react.default.createElement("footer", {
        className: "website-footer"
      }, _react.default.createElement("div", null, _react.default.createElement(_PatternChunk.default, {
        adjust: adjust,
        reserved: 0
      })), _react.default.createElement("div", null, _react.default.createElement(_PatternChunk.default, {
        adjust: adjust,
        reserved: 0
      })), _react.default.createElement("div", null, social.map(function (_ref) {
        var name = _ref.name,
            separator = _ref.separator,
            link = _ref.link;
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactRouterDom.NavLink, {
          className: "link",
          to: link
        }, name), _react.default.createElement("span", {
          className: "ws"
        }, "-"), _react.default.createElement("span", {
          className: "ws"
        }, "-"), _react.default.createElement("span", {
          className: "ws"
        }, "-"), separator && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", null, '/'), _react.default.createElement("span", {
          className: "ws"
        }, "-"), _react.default.createElement("span", {
          className: "ws"
        }, "-"), _react.default.createElement("span", {
          className: "ws"
        }, "-")));
      }), _react.default.createElement(_PatternChunk.default, {
        adjust: adjust,
        reserved: reserved
      }), _react.default.createElement("a", {
        className: "link",
        target: "_blank",
        to: "/"
      }, "A")));
    }
  }]);

  return Footer;
}(_react.Component);

var _default = Footer;
exports.default = _default;