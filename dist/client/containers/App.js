"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _reactRouterConfig = require("react-router-config");

var actions = _interopRequireWildcard(require("../actions"));

var _reducers = require("../reducers");

var _Gallery = _interopRequireDefault(require("./Gallery"));

var _Header = _interopRequireDefault(require("./navigation/Header"));

var _Footer = _interopRequireDefault(require("../components/Footer"));

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

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "status", {
      blendMode: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uLink", _react.default.createRef());

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var updateApp = this.props.updateApp;

      if (window.getComputedStyle(document.body).mixBlendMode !== undefined && this.status.blendMode) {
        this.setState({
          blendMode: false
        });
      }

      if (this.uLink.current.offsetWidth === 12) {
        updateApp({
          adjustForMobile: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      } // scroll to hash position - header height


      if (this.props.location.hash && this.uLink.current) {
        var target = document.getElementById(this.props.location.hash);
        console.log(this.uLink.current.offsetHeight);
        window.scrollTo(0, this.uLink.current.offsetWidth === 14 ? target.offsetTop - this.uLink.current.offsetHeight * 5 : target.offsetTop - this.uLink.current.offsetHeight * 4);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          route = _this$props.route,
          location = _this$props.location,
          configs = _this$props.configs;
      var pageName = location.pathname.split('/')[1] || 'front';
      return _react.default.createElement("div", {
        className: "container__inner ".concat(pageName, " ").concat(this.status.blendMode ? 'blendMode' : 'no-blendMode')
      }, _react.default.createElement("span", {
        ref: this.uLink,
        className: "fake"
      }, "U"), _react.default.createElement(_Gallery.default, null), _react.default.createElement(_Header.default, null), _react.default.createElement("main", {
        role: "main",
        className: "main-content"
      }, (0, _reactRouterConfig.renderRoutes)(route.routes)), _react.default.createElement(_Footer.default, {
        adjust: configs.adjustForMobile
      }));
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    configs: (0, _reducers.getAppConfigs)(state)
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(App));

exports.default = _default;