"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Pattern = _interopRequireDefault(require("../patterns/Pattern"));

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

var ImageComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageComponent, _Component);

  function ImageComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ImageComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ImageComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      imageIsLoaded: false,
      tick: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "to", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "max", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isStillMounted", true);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reloadPattern", function () {
      _this.setState({
        tick: _this.state.tick + 1
      });
    });

    return _this;
  }

  _createClass(ImageComponent, [{
    key: "checkImage",
    value: function checkImage() {
      var _this$props = this.props,
          src = _this$props.src,
          imagesQuery = _this$props.imagesQuery;
      var url = typeof imagesQuery !== 'undefined' ? "".concat(src).concat(imagesQuery) : src;
      return new Promise(function (resolve) {
        var img = new Image();
        var imgSrc = url;

        img.onload = function () {
          return resolve({
            imgSrc: imgSrc,
            status: 'ok'
          });
        };

        img.onerror = function () {
          return resolve({
            imgSrc: imgSrc,
            status: 'error'
          });
        };

        img.src = imgSrc;
      });
    }
  }, {
    key: "setMax",
    value: function setMax() {
      var _this2 = this;

      this.max = window.setTimeout(function () {
        window.clearInterval(_this2.to);

        _this2.setState({
          imageIsLoaded: true,
          tick: 0
        });
      }, 5000);
    }
  }, {
    key: "loadImage",
    value: function loadImage() {
      var _this3 = this;

      this.to = window.setInterval(this.reloadPattern, 1000);
      this.checkImage().then(function () {
        if (_this3.isStillMounted) {
          window.clearInterval(_this3.to);

          _this3.setState({
            imageIsLoaded: true,
            tick: 0
          });
        }
      }).catch(function () {
        if (_this3.isStillMounted) {
          window.clearInterval(_this3.to);

          _this3.setState({
            imageIsLoaded: true,
            tick: 0
          });
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadImage();
      this.setMax();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
      window.clearInterval(this.to);
      window.clearTimeout(this.max);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          src = _this$props2.src,
          classList = _this$props2.classList,
          imagesQuery = _this$props2.imagesQuery,
          patternId = _this$props2.patternId;
      var url = typeof imagesQuery !== 'undefined' ? "".concat(src).concat(imagesQuery) : src;
      var style = {
        backgroundImage: "url('".concat(url, "')")
      };
      var classes = typeof classList !== 'undefined' ? classList : '';
      return _react.default.createElement("div", {
        className: "".concat(classes)
      }, _react.default.createElement("div", {
        className: "preview-image",
        style: style
      }), _react.default.createElement("div", {
        className: "preview-pattern ".concat(classes, " ").concat(this.state.imageIsLoaded ? 'preview-pattern--hidden' : '')
      }, _react.default.createElement(_Pattern.default, {
        sliderName: patternId
      })));
    }
  }]);

  return ImageComponent;
}(_react.Component);

var _default = ImageComponent;
exports.default = _default;