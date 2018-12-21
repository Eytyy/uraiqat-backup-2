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

var _PostDefault = _interopRequireDefault(require("../../components/home/default/PostDefault"));

var _actions = require("../../actions");

var _reducers = require("../../reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RelatedPosts =
/*#__PURE__*/
function (_Component) {
  _inherits(RelatedPosts, _Component);

  function RelatedPosts() {
    _classCallCheck(this, RelatedPosts);

    return _possibleConstructorReturn(this, _getPrototypeOf(RelatedPosts).apply(this, arguments));
  }

  _createClass(RelatedPosts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          fetchRelated = _this$props.fetchRelated,
          id = _this$props.id;
      fetchRelated(id);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      var fetchRelated = this.props.fetchRelated;

      if (nextProps.id !== this.props.id) {
        fetchRelated(this.props.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          content = _this$props2.content,
          isFetching = _this$props2.isFetching;

      if (isFetching || content.length === 0) {
        return null;
      }

      return content.map(function (_ref) {
        var fields = _ref.fields,
            sys = _ref.sys;

        var withid = _objectSpread({}, fields, {
          id: sys.id
        });

        return _react.default.createElement(_PostDefault.default, {
          content: withid,
          key: sys.id
        });
      });
    }
  }], [{
    key: "fetchData",
    //eslint-disable-line
    value: function fetchData(store, id) {
      return store.dispatch((0, _actions.fetchRelated)(id));
    }
  }]);

  return RelatedPosts;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var id = ownProps.id,
      postID = ownProps.postID;
  return {
    content: (0, _reducers.getRelatedPosts)(state, id, postID),
    isFetching: (0, _reducers.isRelatedFetching)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchRelated: _actions.fetchRelated
  }, dispatch);
};

RelatedPosts.propTypes = {
  isFetching: _propTypes.default.bool.isRequired,
  fetchRelated: _propTypes.default.func.isRequired
};
RelatedPosts.defaultProps = {
  content: []
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RelatedPosts));

exports.default = _default;