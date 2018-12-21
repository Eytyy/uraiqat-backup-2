"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _CommonProjectPreview = _interopRequireDefault(require("../projects/CommonProjectPreview"));

var _BodyText = _interopRequireDefault(require("../BodyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var LandingAtelier =
/*#__PURE__*/
function (_Component) {
  _inherits(LandingAtelier, _Component);

  function LandingAtelier() {
    var _this;

    _classCallCheck(this, LandingAtelier);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LandingAtelier).call(this));
    _this.state = {
      initialIndex: 1,
      skip: 0
    };
    _this.updateUi = _this.updateUi.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onScroll = (0, _throttle.default)(_this.onScroll.bind(_assertThisInitialized(_assertThisInitialized(_this))), 500, {
      leading: false,
      trailing: true
    });
    _this.visibleContent = [];
    return _this;
  }

  _createClass(LandingAtelier, [{
    key: "updateUi",
    value: function updateUi() {
      this.setState({
        skip: this.state.skip + 1,
        initialIndex: this.state.initialIndex + 1
      });
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var content = this.props.content;

      if (this.visibleContent.length === content.length) {
        return;
      }

      if (window.innerHeight * this.state.initialIndex >= this.section.offsetHeight - window.scrollY) {
        requestAnimationFrame(this.updateUi);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          content = _this$props.content,
          intro = _this$props.intro;
      var classList = 'landing-page landing-page--atelier main-section';
      var numberOfVisibleItemsPerScroll = 8;

      if (typeof content === 'undefined') {
        return null;
      }

      this.visibleContent = typeof this.state.skip !== 'undefined' ? content.slice(0, this.state.skip * numberOfVisibleItemsPerScroll + numberOfVisibleItemsPerScroll) : content;
      return _react.default.createElement("section", {
        ref: function ref(el) {
          _this2.section = el;
        },
        className: classList
      }, _react.default.createElement("section", {
        className: "atelier-sub-section"
      }, _react.default.createElement("h2", {
        className: "atelier-sub-section__title"
      }, "About"), _react.default.createElement("div", {
        ref: function ref(el) {
          _this2.intro = el;
        },
        className: "atelier-landing__top"
      }, _react.default.createElement("div", {
        className: "atelier-landing__top__desc"
      }, intro.desc && _react.default.createElement(_BodyText.default, {
        content: intro.desc
      })))), _react.default.createElement("section", {
        className: "atelier-sub-section"
      }, _react.default.createElement("h2", {
        className: "atelier-sub-section__title"
      }, "Projects"), _react.default.createElement("div", {
        className: "atelier-section__inner"
      }, this.visibleContent.map(function (post) {
        return _react.default.createElement(_CommonProjectPreview.default, _extends({}, post, {
          id: post.id,
          key: post.id,
          type: "atelier"
        }));
      }))));
    }
  }]);

  return LandingAtelier;
}(_react.Component);

var _default = LandingAtelier;
exports.default = _default;