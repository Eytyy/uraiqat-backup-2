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

var SlideImageComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(SlideImageComponent, _Component);

  function SlideImageComponent() {
    var _this;

    _classCallCheck(this, SlideImageComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SlideImageComponent).call(this));
    _this.state = {
      imageIsLoaded: false
    };
    _this.onSlideClick = _this.onSlideClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.isStillMounted = true;
    return _this;
  }

  _createClass(SlideImageComponent, [{
    key: "onSlideClick",
    value: function onSlideClick() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          id = _this$props.id;

      if (this.state.imageIsLoaded) {
        onClick(id);
      }
    }
  }, {
    key: "checkImage",
    value: function checkImage() {
      var _this$props2 = this.props,
          content = _this$props2.content,
          imagesQuery = _this$props2.imagesQuery;
      return new Promise(function (resolve) {
        var img = new Image();
        var imgSrc = typeof imagesQuery !== 'undefined' ? "".concat(content.file.url).concat(imagesQuery) : content.file.url;

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
    key: "loadImage",
    value: function loadImage() {
      var _this2 = this;

      this.checkImage().then(function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            imageIsLoaded: true
          });
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadImage();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          content = _this$props3.content,
          imagesQuery = _this$props3.imagesQuery,
          active = _this$props3.active,
          sliderName = _this$props3.sliderName;
      var file = content.file,
          description = content.description;
      var url = typeof imagesQuery !== 'undefined' ? "".concat(file.url).concat(imagesQuery) : file.url;
      var style = {
        backgroundImage: "url('".concat(url, "')")
      };
      return _react.default.createElement("div", {
        className: "slide slide--image",
        onClick: this.onSlideClick
      }, this.state.imageIsLoaded ? _react.default.createElement("div", {
        className: "preview-image slide__image",
        style: style
      }) : _react.default.createElement(_Pattern.default, {
        sliderName: sliderName
      }), description && _react.default.createElement("div", {
        className: "caption"
      }, active + 1, ": ", description));
    }
  }]);

  return SlideImageComponent;
}(_react.Component);

var _default = SlideImageComponent;
exports.default = _default;