"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _InfinitScroll = _interopRequireDefault(require("./InfinitScroll"));

var _CommonProjectPreview = _interopRequireDefault(require("../projects/CommonProjectPreview"));

var _BodyText = _interopRequireDefault(require("../BodyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AtelierContent = function AtelierContent(visibleContent, intro) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
    id: "#about",
    className: "atelier-sub-section"
  }, _react.default.createElement("h2", {
    className: "atelier-sub-section__title"
  }, "About"), _react.default.createElement("div", {
    className: "atelier-landing__top"
  }, _react.default.createElement("div", {
    className: "atelier-landing__top__desc"
  }, intro.desc && _react.default.createElement(_BodyText.default, {
    content: intro.desc
  })))), _react.default.createElement("section", {
    id: "#portfolio",
    className: "atelier-sub-section"
  }, _react.default.createElement("h2", {
    className: "atelier-sub-section__title"
  }, "Portfolio"), _react.default.createElement("div", {
    className: "atelier-section__inner"
  }, visibleContent.map(function (post) {
    return _react.default.createElement(_CommonProjectPreview.default, _extends({
      id: post.id,
      key: post.id
    }, post, {
      type: "atelier",
      category: post.category
    }));
  }))));
};

var LandingAtelier =
/*#__PURE__*/
function (_Component) {
  _inherits(LandingAtelier, _Component);

  function LandingAtelier() {
    _classCallCheck(this, LandingAtelier);

    return _possibleConstructorReturn(this, _getPrototypeOf(LandingAtelier).apply(this, arguments));
  }

  _createClass(LandingAtelier, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          intro = _this$props.intro;

      if (typeof content === 'undefined') {
        return null;
      }

      return _react.default.createElement(_InfinitScroll.default, {
        classList: "landing-page landing-page--atelier main-section",
        content: content,
        render: function render(visibleContent) {
          return AtelierContent(visibleContent, intro);
        }
      });
    }
  }]);

  return LandingAtelier;
}(_react.Component);

var _default = LandingAtelier;
exports.default = _default;