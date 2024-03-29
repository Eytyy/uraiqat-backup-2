"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _reducers = require("../../reducers");

var _PatternLine = _interopRequireDefault(require("./PatternLine"));

var _helpers = require("../../helpers");

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

var LoadingPattern =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadingPattern, _Component);

  function LoadingPattern(props) {
    var _this;

    _classCallCheck(this, LoadingPattern);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadingPattern).call(this, props));
    _this.to = null;
    _this.state = {
      tick: 0
    };
    _this.loadPattern = _this.loadPattern.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.reloadPattern = _this.reloadPattern.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LoadingPattern, [{
    key: "loadPattern",
    value: function loadPattern() {
      var adjustForMobile = this.props.configs.adjustForMobile;
      var windowSize = (0, _helpers.getWindowDimensions)();
      var maxWidth = (0, _helpers.getMaxWidth)();
      var font = (0, _helpers.getFontValues)();
      var config = {
        w: maxWidth,
        h: windowSize.h - font.characterHeight * 2
      };
      var numberOfLines = (0, _helpers.getNoOfChars)('loading', config, adjustForMobile);
      var fakeArray = Array(numberOfLines.y).fill('pl');
      return {
        fakeArray: fakeArray,
        numberOfLines: numberOfLines
      };
    }
  }, {
    key: "reloadPattern",
    value: function reloadPattern() {
      this.setState({
        tick: this.state.tick + 1
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.to = window.setInterval(this.reloadPattern, 250);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(this.to);
    }
  }, {
    key: "render",
    value: function render() {
      if (typeof window === 'undefined') {
        return _react.default.createElement("div", {
          className: "pattern pattern--loading"
        });
      }

      var pattern = this.loadPattern();
      return _react.default.createElement("div", {
        className: "pattern pattern--loading"
      }, pattern.fakeArray.map(function (item, index) {
        return _react.default.createElement(_PatternLine.default, {
          key: "pl-".concat(index),
          noOfChars: pattern.numberOfLines.x
        });
      }));
    }
  }]);

  return LoadingPattern;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    configs: (0, _reducers.getAppConfigs)(state)
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(LoadingPattern));

exports.default = _default;