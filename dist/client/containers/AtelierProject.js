"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _actions = require("../actions");

var _reducers = require("../reducers");

var _BodyText = _interopRequireDefault(require("../components/BodyText"));

var _Slider = _interopRequireDefault(require("./Slider"));

var _RelatedPosts = _interopRequireDefault(require("../components/related/RelatedPosts"));

var _InnerNav = _interopRequireDefault(require("../components/InnerNav"));

var _LoadingPattern = _interopRequireDefault(require("../components/patterns/LoadingPattern"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AtelierProject =
/*#__PURE__*/
function (_Component) {
  _inherits(AtelierProject, _Component);

  function AtelierProject() {
    _classCallCheck(this, AtelierProject);

    return _possibleConstructorReturn(this, _getPrototypeOf(AtelierProject).apply(this, arguments));
  }

  _createClass(AtelierProject, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fetchAtelierProjects = this.props.fetchAtelierProjects;
      return fetchAtelierProjects();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          innerNavContent = _this$props.innerNavContent,
          isFetching = _this$props.isFetching,
          match = _this$props.match;

      if (isFetching || typeof content.id === 'undefined') {
        return _react.default.createElement("div", {
          className: "loader"
        }, _react.default.createElement(_LoadingPattern.default, null));
      }

      var title = content.title,
          description = content.description,
          mainSlider = content.mainSlider;
      return _react.default.createElement("article", {
        className: "atelier"
      }, _react.default.createElement("header", null, _react.default.createElement("h1", {
        className: "main-title"
      }, title)), _react.default.createElement("div", {
        className: "atelier__top"
      }, mainSlider && _react.default.createElement("div", {
        className: "atelier__media"
      }, _react.default.createElement(_Slider.default, {
        contentTitle: title,
        sliderName: "atelier-main-slider",
        classList: "slider--main",
        sliderId: "".concat(content.id, "m"),
        imagesQuery: '?fl=progressive&w=1022',
        content: mainSlider
      }))), description && _react.default.createElement("div", {
        className: "atelier__bottom"
      }, _react.default.createElement("div", {
        className: "atelier__about"
      }, _react.default.createElement(_BodyText.default, {
        content: description
      }))), _react.default.createElement("aside", {
        className: "related-content atelier__related"
      }, _react.default.createElement(_RelatedPosts.default, {
        id: match.params.id
      })), _react.default.createElement(_InnerNav.default, _extends({}, innerNavContent, {
        type: "atelier"
      })));
    }
  }], [{
    key: "fetchData",
    //eslint-disable-line
    value: function fetchData(store) {
      return store.dispatch((0, _actions.fetchAtelierProjects)());
    }
  }]);

  return AtelierProject;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var match = ownProps.match;
  var id = match.params.id;
  return {
    content: (0, _reducers.getAtelierProject)(state, id),
    innerNavContent: (0, _reducers.getNextPrev)(state, id, 'atelier'),
    isFetching: (0, _reducers.isAtelierProjectsFetching)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchAtelierProjects: _actions.fetchAtelierProjects
  }, dispatch);
};

AtelierProject.propTypes = {
  content: _propTypes.default.shape({
    id: _propTypes.default.string
  }),
  isFetching: _propTypes.default.bool.isRequired,
  fetchAtelierProjects: _propTypes.default.func.isRequired
};
AtelierProject.defaultProps = {
  content: {}
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AtelierProject));

exports.default = _default;