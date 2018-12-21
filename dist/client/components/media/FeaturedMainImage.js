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

var FeaturedMainImage =
/*#__PURE__*/
function (_Component) {
  _inherits(FeaturedMainImage, _Component);

  function FeaturedMainImage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FeaturedMainImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FeaturedMainImage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "to", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      imagesLoaded: false,
      tick: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isStillMounted", true);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ShouldOthersbeVisible", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reloadPattern", function () {
      _this.setState({
        tick: _this.state.tick + 1
      });
    });

    return _this;
  }

  _createClass(FeaturedMainImage, [{
    key: "checkImage",
    value: function checkImage(src, w) {
      var url = "".concat(src, "?w=").concat(w);
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
    key: "loadImages",
    value: function loadImages() {
      var _this2 = this;

      var _this$props = this.props,
          main = _this$props.main,
          drawing = _this$props.drawing,
          diagram = _this$props.diagram,
          craft = _this$props.craft;
      this.to = window.setInterval(this.reloadPattern, 1000);

      if (this.ShouldOthersbeVisible) {
        Promise.all([this.checkImage(main.fields.file.url, 600).then(), this.checkImage(drawing.fields.file.url, 300).then(), this.checkImage(diagram.fields.file.url, 200).then(), this.checkImage(craft.fields.file.url, 200).then()]).then(function () {
          if (_this2.isStillMounted) {
            window.clearInterval(_this2.to);

            _this2.setState({
              imagesLoaded: true,
              tick: 0
            });
          }
        }).catch(function (error) {
          return console.log(error);
        });
      } else {
        this.checkImage(main.fields.file.url, 400).then(function () {
          if (_this2.isStillMounted) {
            window.clearInterval(_this2.to);

            _this2.setState({
              imagesLoaded: true,
              tick: 0
            });
          }
        }).catch(function (error) {
          return console.log(error);
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadImages();
      this.ShouldOthersbeVisible = window.innerWidth >= 1024;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
      window.clearInterval(this.to);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          main = _this$props2.main,
          drawing = _this$props2.drawing,
          diagram = _this$props2.diagram,
          craft = _this$props2.craft;
      return _react.default.createElement(_react.default.Fragment, null, main && _react.default.createElement("div", {
        className: "project-preview__image project-preview__image--main"
      }, _react.default.createElement("div", {
        style: {
          backgroundImage: "url(".concat(main.fields.file.url, "?fl=progressive&w=600)")
        },
        className: "preview-image"
      })), this.ShouldOthersbeVisible && drawing && _react.default.createElement("div", {
        className: "project-preview__image project-preview__image--drawing"
      }, _react.default.createElement("div", {
        style: {
          backgroundImage: "url(".concat(drawing.fields.file.url, "?fl=progressive&w=300)")
        },
        className: "preview-image project-preview__image project-preview__image--drawing"
      })), this.ShouldOthersbeVisible && _react.default.createElement("div", {
        className: "project-preview__thumbs__right-col"
      }, diagram && _react.default.createElement("div", {
        className: "project-preview__image project-preview__image--diagram"
      }, _react.default.createElement("div", {
        style: {
          backgroundImage: "url(".concat(diagram.fields.file.url, "?fl=progressive&w=200)")
        },
        className: "preview-image"
      })), craft && _react.default.createElement("div", {
        className: "project-preview__image project-preview__image--craft"
      }, _react.default.createElement("div", {
        style: {
          backgroundImage: "url(".concat(craft.fields.file.url, "?fl=progressive&w=200)")
        },
        className: "preview-image"
      }))), _react.default.createElement("div", {
        className: "preview-pattern ".concat(this.state.imagesLoaded ? 'preview-pattern--hidden' : '')
      }, _react.default.createElement(_Pattern.default, {
        sliderName: 'project-main-thumb--featured'
      })));
    }
  }]);

  return FeaturedMainImage;
}(_react.Component);

var _default = FeaturedMainImage;
exports.default = _default;