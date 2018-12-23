"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var actions = _interopRequireWildcard(require("../../../actions"));

var _reducers = require("../../../reducers");

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _PatternChunk = _interopRequireDefault(require("../../../components/patterns/PatternChunk"));

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

var AtelierNavigation =
/*#__PURE__*/
function (_Component) {
  _inherits(AtelierNavigation, _Component);

  function AtelierNavigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AtelierNavigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AtelierNavigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "config", {
      spacesBefore: 1,
      spacesAfter: 3,
      separator: '/',
      items: [{
        name: 'About',
        id: 'about',
        link: '/atelier#about',
        glyph: {
          className: 'ind',
          content: '->'
        },
        size: 'About'.length
      }, {
        name: 'Portfolio',
        id: 'portfolio',
        link: '/atelier#portfolio',
        glyph: {
          className: 'ind',
          content: '->'
        },
        size: 'Portfolio'.length
      }]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getHeaderSize", function () {
      return window.innerWidth >= 1280 ? 32 * 5 : 24 * 4;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (target) {
      var updateAtelierNav = _this.props.updateAtelierNav;
      var targetPosition = document.getElementById("".concat(target)).offsetTop;

      var headerSize = _this.getHeaderSize();

      window.scrollTo(0, targetPosition - headerSize);
      updateAtelierNav(target);
    });

    return _this;
  }

  _createClass(AtelierNavigation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          adjust = _this$props.adjust,
          activeSection = _this$props.activeSection,
          link = _this$props.link,
          glyph = _this$props.glyph,
          name = _this$props.name,
          id = _this$props.id;
      var reservedNavSpaces = this.config.items.reduce(function (current, next) {
        return current + next.size + next.glyph.content.length;
      }, 0);
      var reservedNavEmptySpaces = this.config.items.length * (this.config.spacesBefore + this.config.spacesAfter);
      var numberofNavSeparators = this.config.items.length - 1;
      var totalReservedSpaces = name.length + glyph.content.length + 2 + reservedNavSpaces + reservedNavEmptySpaces + numberofNavSeparators;
      return _react.default.createElement("div", {
        className: "header-mobile__main__item"
      }, _react.default.createElement(_NavItem.default, {
        adjust: adjust,
        name: name,
        link: link,
        glyph: glyph
      }), this.config.items.map(function (_ref, index) {
        var name = _ref.name,
            glyph = _ref.glyph,
            id = _ref.id;
        return _react.default.createElement(_react.Fragment, {
          key: id
        }, _react.default.createElement("span", {
          key: "header__link-chunk--".concat(index + 1),
          className: "header__link-chunk"
        }, _react.default.createElement("span", {
          className: "ws"
        }, "-"), _react.default.createElement("span", {
          onClick: function onClick() {
            _this2.onClick(id);
          },
          className: "link menu-link ".concat(activeSection === id ? 'active' : '')
        }, _react.default.createElement("span", {
          className: glyph.className
        }, glyph.content), name), _react.default.createElement("span", {
          className: "ws"
        }, "-"), _react.default.createElement("span", {
          className: "ws"
        }, "-"), _react.default.createElement("span", {
          className: "ws"
        }, "-"), index < _this2.config.items.length - 1 && _react.default.createElement("span", {
          className: "separator"
        }, '/')));
      }), _react.default.createElement(_PatternChunk.default, {
        adjust: adjust,
        reserved: totalReservedSpaces
      }));
    }
  }]);

  return AtelierNavigation;
}(_react.Component);

AtelierNavigation.propTypes = {
  activeSection: _propTypes.default.string
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeSection: (0, _reducers.getActiveAtelier)(state)
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(AtelierNavigation));

exports.default = _default;