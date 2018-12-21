"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var VideoComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoComponent, _Component);

  function VideoComponent() {
    var _this;

    _classCallCheck(this, VideoComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoComponent).call(this));
    _this.state = {
      playing: false
    };
    _this.playVideo = _this.playVideo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.stopVideo = _this.stopVideo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleVideo = _this.toggleVideo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.videoLoaded = _this.videoLoaded.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.resetVideo = _this.resetVideo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(VideoComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.video.addEventListener('loadeddata', this.videoLoaded, false);
      this.video.addEventListener('ended', this.resetVideo, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopVideo();
      this.video.removeEventListener('loadeddata', this.videoLoaded);
      this.video.removeEventListener('ended', this.resetVideo);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activeSlide !== nextProps.index && this.state.playing) {
        this.stopVideo();
      }
    }
  }, {
    key: "videoLoaded",
    value: function videoLoaded() {
      this.playVideo();
    }
  }, {
    key: "toggleVideo",
    value: function toggleVideo() {
      if (this.state.playing) {
        this.stopVideo();
      } else {
        this.playVideo();
      }
    }
  }, {
    key: "playVideo",
    value: function playVideo() {
      this.video.play();
      this.setState({
        playing: true
      });
    }
  }, {
    key: "stopVideo",
    value: function stopVideo() {
      this.video.pause();
      this.setState({
        playing: false
      });
    }
  }, {
    key: "resetVideo",
    value: function resetVideo() {
      this.video.currentTime = 0;
      this.stopVideo();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          content = _this$props.content,
          classList = _this$props.classList;
      var url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
      var allClasses = "slide slide--video video gallery__slide ".concat(classList, " ").concat(this.state.playing ? 'js-videoIsActive' : 'js-videoIsPaused');
      return _react.default.createElement("div", {
        onClick: this.toggleVideo,
        className: allClasses
      }, _react.default.createElement("div", {
        className: "gallery__slide__content"
      }, _react.default.createElement("div", {
        className: "video__wrapper"
      }, _react.default.createElement("div", {
        className: "video-controls"
      }, _react.default.createElement("span", {
        className: "video-controls__item video-state"
      })), _react.default.createElement("video", {
        ref: function ref(el) {
          _this2.video = el;
        },
        src: url
      })), content.description && _react.default.createElement("div", {
        className: "slide-details"
      }, _react.default.createElement("div", {
        className: "slide-details__content"
      }, _react.default.createElement("div", {
        className: "slide-details__description"
      }, content.description)))));
    }
  }]);

  return VideoComponent;
}(_react.Component);

var _default = VideoComponent;
exports.default = _default;