"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHammerjs = _interopRequireDefault(require("react-hammerjs"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _reducers = require("../reducers");

var actions = _interopRequireWildcard(require("../actions"));

var _GallerySlide = _interopRequireDefault(require("../components/media/GallerySlide"));

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

var Gallery =
/*#__PURE__*/
function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gallery).call(this));
    _this.updateSlide = _this.updateSlide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeGallery = _this.closeGallery.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSwipe = _this.handleSwipe.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyStrokes = _this.handleKeyStrokes.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Gallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyStrokes);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var content = nextProps.content;
      var isActive = content.isActive;

      if (isActive) {
        document.body.classList.add('js-gallery-isActive');
      } else {
        document.body.classList.remove('js-gallery-isActive');
      }

      if (nextProps.location.pathname !== this.props.location.pathname && isActive) {
        this.closeGallery();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyStrokes);
    }
  }, {
    key: "updateSlide",
    value: function updateSlide(direction) {
      var _this$props = this.props,
          updateActiveSlide = _this$props.updateActiveSlide,
          content = _this$props.content;
      var galleryId = content.galleryId;
      updateActiveSlide(galleryId, direction);
    }
  }, {
    key: "closeGallery",
    value: function closeGallery() {
      var toggleGallery = this.props.toggleGallery;
      var openGallery = false;
      toggleGallery(openGallery);
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe(event) {
      // show previous
      if (event.deltaX > 0) {
        this.updateSlide('prev');
      } else {
        this.updateSlide('next');
      }
    }
  }, {
    key: "handleKeyStrokes",
    value: function handleKeyStrokes(event) {
      switch (event.keyCode) {
        case 39:
          this.updateSlide('next');
          break;

        case 37:
          this.updateSlide('prev');
          break;

        case 27:
          this.closeGallery();
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var content = this.props.content;
      var slides = content.slides,
          isActive = content.isActive,
          activeSlide = content.activeSlide,
          title = content.title,
          type = content.type;

      if (!isActive) {
        return null;
      }

      var sliderRailStyle = {
        transform: "translateX(-".concat(activeSlide * 100, "%)")
      };
      return _react.default.createElement(_reactHammerjs.default, {
        onSwipe: this.handleSwipe,
        direction: "DIRECTION_HORIZONTAL"
      }, _react.default.createElement("div", {
        className: "gallery ".concat(type === 'drawings' ? 'gallery--drawings' : 'gallery--default')
      }, _react.default.createElement("div", {
        className: "".concat(slides.length === 1 ? 'gallery__inner gallery__inner--single' : 'gallery__inner')
      }, _react.default.createElement("div", {
        style: sliderRailStyle,
        className: "gallery__slides"
      }, slides.map(function (slide, index) {
        return _react.default.createElement(_GallerySlide.default, {
          title: title,
          activeSlide: activeSlide,
          index: index,
          key: slide.id,
          content: slide
        });
      }))), _react.default.createElement("div", {
        onClick: this.closeGallery,
        className: "gallery-btn gallery-btn--close"
      }, "x"), slides.length !== 1 && _react.default.createElement("div", {
        className: "gallery-btn gallery-btn--nav gallery-btn--nav--next",
        onClick: function onClick() {
          return _this2.updateSlide('next');
        }
      }, '->'), slides.length !== 1 && _react.default.createElement("div", {
        onClick: function onClick() {
          return _this2.updateSlide('prev');
        },
        className: "gallery-btn gallery-btn--nav gallery-btn--nav--prev"
      }, '<-')));
    }
  }]);

  return Gallery;
}(_react.Component);

Gallery.defaultProps = {
  activeSlide: 0
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    content: (0, _reducers.getGalleryContent)(state),
    activeSlide: (0, _reducers.getActiveSlide)(state)
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(Gallery));

exports.default = _default;