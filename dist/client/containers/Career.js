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

var _LoadingPattern = _interopRequireDefault(require("../components/patterns/LoadingPattern"));

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

var Career =
/*#__PURE__*/
function (_Component) {
  _inherits(Career, _Component);

  function Career() {
    _classCallCheck(this, Career);

    return _possibleConstructorReturn(this, _getPrototypeOf(Career).apply(this, arguments));
  }

  _createClass(Career, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          content = _this$props.content,
          isFetching = _this$props.isFetching;

      if (!isFetching && typeof content.id === 'undefined') {
        this.fetchData();
      }
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this$props2 = this.props,
          fetchCareer = _this$props2.fetchCareer,
          match = _this$props2.match;
      var id = match.params.id;
      fetchCareer(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          content = _this$props3.content,
          isFetching = _this$props3.isFetching;
      var title = content.title,
          description = content.description;
      return isFetching || typeof content.id === 'undefined' ? _react.default.createElement("div", {
        className: "loader"
      }, _react.default.createElement(_LoadingPattern.default, null)) : _react.default.createElement("article", {
        className: "career"
      }, _react.default.createElement("header", {
        className: "career__header"
      }, _react.default.createElement("h1", {
        className: "main-title career__title"
      }, title)), _react.default.createElement("div", {
        className: "career__content"
      }, _react.default.createElement(_BodyText.default, {
        content: description
      })));
    }
  }], [{
    key: "fetchData",
    //eslint-disable-line
    value: function fetchData(store, id) {
      return store.dispatch((0, _actions.fetchCareer)(id));
    }
  }]);

  return Career;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var match = ownProps.match;
  var id = match.params.id;
  return {
    content: (0, _reducers.getCareer)(state, id),
    isFetching: (0, _reducers.isCareerFetching)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchCareer: _actions.fetchCareer
  }, dispatch);
};

Career.propTypes = {
  content: _propTypes.default.shape({
    id: _propTypes.default.string
  }),
  isFetching: _propTypes.default.bool.isRequired,
  fetchCareer: _propTypes.default.func.isRequired
};
Career.defaultProps = {
  content: {}
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Career));

exports.default = _default;