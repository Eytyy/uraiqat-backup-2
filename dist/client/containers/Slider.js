"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var actions = _interopRequireWildcard(require("../actions"));

var _reducers = require("../reducers");

var _reactHammerjs = _interopRequireDefault(require("react-hammerjs"));

var _Slide = _interopRequireDefault(require("../components/media/Slide"));

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

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this));
    _this.state = {
      clientLoaded: false
    };
    _this.onSlideClick = _this.onSlideClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateSlide = _this.updateSlide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSwipe = _this.handleSwipe.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          content = _this$props.content,
          updateGallery = _this$props.updateGallery,
          sliderId = _this$props.sliderId,
          contentTitle = _this$props.contentTitle,
          type = _this$props.type;
      this.setState({
        clientLoaded: true
      });
      updateGallery(sliderId, content, contentTitle, type);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var sliderId = _ref.sliderId,
          content = _ref.content,
          contentTitle = _ref.contentTitle,
          type = _ref.type,
          updateGallery = _ref.updateGallery;

      if (sliderId !== this.props.sliderId) {
        updateGallery(sliderId, content, contentTitle, type);
      }
    }
  }, {
    key: "updateSlide",
    value: function updateSlide(direction) {
      var _this$props2 = this.props,
          updateActiveSlide = _this$props2.updateActiveSlide,
          sliderId = _this$props2.sliderId;
      updateActiveSlide(sliderId, direction);
    }
  }, {
    key: "onSlideClick",
    value: function onSlideClick() {
      var _this$props3 = this.props,
          toggleGallery = _this$props3.toggleGallery,
          sliderId = _this$props3.sliderId,
          type = _this$props3.type;
      var openGallery = true;
      toggleGallery(sliderId, openGallery, type);
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe(event) {
      //eslint-disable-line
      // show previous
      if (event.deltaX > 0) {
        this.updateSlide('prev');
      } else {
        this.updateSlide('next');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          content = _this$props4.content,
          classList = _this$props4.classList,
          imagesQuery = _this$props4.imagesQuery,
          activeSlideIndex = _this$props4.activeSlideIndex,
          sliderName = _this$props4.sliderName,
          type = _this$props4.type;
      var sliderRailStyle = {
        transform: "translateX(-".concat(activeSlideIndex * 100, "%)")
      }; // return null if there are no slides

      if (content.length === 0) {
        return null;
      } // otherwise render the slider


      return _react.default.createElement(_reactHammerjs.default, {
        onSwipe: this.handleSwipe,
        direction: "DIRECTION_HORIZONTAL"
      }, _react.default.createElement("div", {
        ref: function ref(el) {
          _this2.slider = el;
        },
        className: "slider ".concat(content.length > 1 ? 'multiple' : 'single', " ").concat(classList, " ").concat(type === 'drawings' ? 'slider--drawings' : 'slider--default')
      }, _react.default.createElement("div", {
        className: "slider__inner"
      }, _react.default.createElement("div", {
        style: sliderRailStyle,
        className: "slider__slides"
      }, content.map(function (_ref2, index) {
        var fields = _ref2.fields,
            sys = _ref2.sys;
        return _react.default.createElement(_Slide.default, {
          sliderName: sliderName,
          index: index,
          active: activeSlideIndex,
          onClick: _this2.onSlideClick,
          key: sys.id,
          imagesQuery: imagesQuery,
          content: fields
        });
      }))), content.length === 1 ? null : _react.default.createElement("div", {
        className: "slider__controls"
      }, _react.default.createElement("div", {
        onClick: function onClick() {
          return _this2.updateSlide('next');
        },
        className: "slider__controls__item slider-btn slider-btn--next"
      }, '>'), _react.default.createElement("div", {
        className: "slider__controls__item slider__counter"
      }, activeSlideIndex + 1, '/', content.length), _react.default.createElement("div", {
        onClick: function onClick() {
          return _this2.updateSlide('prev');
        },
        className: "slider__controls__item slider-btn slider-btn--prev"
      }, '<'))));
    }
  }]);

  return Slider;
}(_react.Component);

Slider.defaultProps = {
  isFlexible: false,
  activeSlideIndex: 0
};

var mapStateToProps = function mapStateToProps(state, _ref3) {
  var sliderId = _ref3.sliderId;
  return {
    activeSlideIndex: (0, _reducers.getActiveSlide)(state, sliderId)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, actions)(Slider);

exports.default = _default;