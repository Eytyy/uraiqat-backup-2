"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InfinitScroll =
/*#__PURE__*/
function (_Component) {
  _inherits(InfinitScroll, _Component);

  function InfinitScroll() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InfinitScroll);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InfinitScroll)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      initialIndex: 1,
      skip: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "visibleContent", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "section", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onScroll", (0, _throttle.default)(function (e) {
      var content = _this.props.content;

      if (_this.visibleContent.length === content.length) {
        return;
      }

      if (window.innerHeight * _this.state.initialIndex >= _this.section.current.offsetHeight - window.scrollY) {
        requestAnimationFrame(_this.updateUi);
      }
    }, 500, {
      leading: false,
      trailing: true
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateUi", function () {
      _this.setState({
        skip: _this.state.skip + 1,
        initialIndex: _this.state.initialIndex + 1
      });
    });

    return _this;
  }

  _createClass(InfinitScroll, [{
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
      var numberOfVisibleItemsPerScroll = 8;
      var _this$props = this.props,
          render = _this$props.render,
          content = _this$props.content,
          classList = _this$props.classList;

      if (typeof content === 'undefined') {
        return null;
      }

      this.visibleContent = typeof this.state.skip !== 'undefined' ? content.slice(0, this.state.skip * numberOfVisibleItemsPerScroll + numberOfVisibleItemsPerScroll) : content;
      return _react.default.createElement("section", {
        ref: this.section,
        className: classList
      }, render(this.visibleContent));
    }
  }]);

  return InfinitScroll;
}(_react.Component);

var _default = InfinitScroll;
exports.default = _default;