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

var VideoComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoComponent, _Component);

  function VideoComponent() {
    var _this;

    _classCallCheck(this, VideoComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoComponent).call(this));
    _this.state = {
      playing: false,
      videoIsLoaded: false
    };
    _this.playVideo = _this.playVideo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.stopVideo = _this.stopVideo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleVideo = _this.toggleVideo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.loadVideo = _this.loadVideo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.checkVideo = _this.checkVideo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderFirstFrame = _this.renderFirstFrame.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.isStillMounted = true;
    return _this;
  }

  _createClass(VideoComponent, [{
    key: "toggleVideo",
    value: function toggleVideo() {
      if (this.state.playing) {
        this.stopVideo();
      } else {
        this.playVideo();
      }

      this.setState({
        playing: !this.state.playing
      });
    }
  }, {
    key: "playVideo",
    value: function playVideo() {
      this.video.play();
    }
  }, {
    key: "stopVideo",
    value: function stopVideo() {
      this.video.pause();
    }
  }, {
    key: "renderFirstFrame",
    value: function renderFirstFrame() {
      this.video.currentTime = 1;
      this.stopVideo();
    }
  }, {
    key: "checkVideo",
    value: function checkVideo() {
      var _this2 = this;

      var content = this.props.content;
      var url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
      return new Promise(function (resolve) {
        _this2.video.addEventListener('loadeddata', function () {
          return resolve({
            url: url,
            status: 'ok'
          });
        }, false);

        _this2.video.addEventListener('error', function () {
          return resolve({
            url: url,
            status: 'error'
          });
        }, false);
      });
    }
  }, {
    key: "loadVideo",
    value: function loadVideo() {
      var _this3 = this;

      this.checkVideo().then(function () {
        if (_this3.isStillMounted) {
          _this3.setState({
            videoIsLoaded: true
          });
        }
      }).then(function () {// this.renderFirstFrame();
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadVideo();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          content = _this$props.content,
          classList = _this$props.classList,
          patternId = _this$props.patternId;
      var url = typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url;
      var allClasses = "video ".concat(classList, " ").concat(this.state.playing ? 'js-videoIsActive' : 'js-videoIsPaused');
      return _react.default.createElement("div", {
        onClick: this.toggleVideo,
        className: allClasses
      }, _react.default.createElement("div", {
        className: "video-controls"
      }, _react.default.createElement("span", {
        className: "video-controls__item video-state"
      })), _react.default.createElement("video", {
        ref: function ref(el) {
          _this4.video = el;
        },
        src: url
      }), _react.default.createElement("div", {
        className: "preview-pattern ".concat(this.state.videoIsLoaded ? 'preview-pattern--hidden' : '')
      }, _react.default.createElement(_Pattern.default, {
        sliderName: patternId
      })));
    }
  }]);

  return VideoComponent;
}(_react.Component);

var _default = VideoComponent;
exports.default = _default;