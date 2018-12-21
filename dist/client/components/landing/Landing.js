"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _LandingFeatured = _interopRequireDefault(require("./LandingFeatured"));

var _LandingChrono = _interopRequireDefault(require("./LandingChrono"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

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

var Landing =
/*#__PURE__*/
function (_Component) {
  _inherits(Landing, _Component);

  function Landing() {
    var _this;

    _classCallCheck(this, Landing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Landing).call(this));
    _this.state = {
      initialIndex: 1,
      skip: 0
    };
    _this.visible = [];
    _this.adjustContainerHeight = _this.adjustContainerHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateUi = _this.updateUi.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onScroll = (0, _throttle.default)(_this.onScroll.bind(_assertThisInitialized(_assertThisInitialized(_this))), 500, {
      leading: false,
      trailing: true
    });
    return _this;
  }

  _createClass(Landing, [{
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
      if (this.visible === this.contentLength) {
        return;
      }

      var introHeight = this.intro ? this.intro.offsetHeight : 0;

      if (window.innerHeight * this.state.initialIndex >= this.section.offsetHeight - introHeight - window.scrollY) {
        requestAnimationFrame(this.updateUi);
      }
    }
  }, {
    key: "adjustContainerHeight",
    value: function adjustContainerHeight() {
      var featured = document.querySelector('.landing-section--featured');
      var main = document.querySelector('.landing-section--main');
      var featuredHeight = featured ? featured.getBoundingClientRect().height : 0;
      var mainHeight = main ? main.getBoundingClientRect().height : 0;
      var newHeight = "".concat(featuredHeight + mainHeight, "px");
      this.section.style.height = newHeight;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var content = this.props.content;
      var mainContent = content.mainContent,
          featuredContent = content.featuredContent;
      this.contentLength = mainContent.length + featuredContent.length;

      if (typeof window !== 'undefined') {
        this.adjustContainerHeight();
      }

      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.adjustContainerHeight();
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
          page = _this$props.page,
          content = _this$props.content;
      var mainContent = content.mainContent,
          featuredContent = content.featuredContent;
      var classList = "landing-page landing-page--".concat(page, " main-section");
      var numberOfVisibleItemsPerScroll = page === 'journal' ? 8 : 3;
      this.visibleFeatured = typeof this.state.skip !== 'undefined' ? featuredContent.slice(0, this.state.skip * numberOfVisibleItemsPerScroll + numberOfVisibleItemsPerScroll) : featuredContent;
      this.visibleMain = typeof this.state.skip !== 'undefined' ? mainContent.slice(0, this.state.skip * numberOfVisibleItemsPerScroll + numberOfVisibleItemsPerScroll - this.visibleFeatured.length) : mainContent;
      this.visible = this.visibleFeatured.length + this.visibleMain.length;
      return _react.default.createElement("section", {
        ref: function ref(el) {
          _this2.section = el;
        },
        className: classList
      }, featuredContent && _react.default.createElement(_LandingFeatured.default, {
        page: page,
        content: this.visibleFeatured
      }), mainContent && _react.default.createElement(_LandingChrono.default, {
        page: page,
        content: this.visibleMain
      }));
    }
  }]);

  return Landing;
}(_react.Component);

var _default = Landing;
exports.default = _default;