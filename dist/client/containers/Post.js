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

var _PostTags = _interopRequireDefault(require("../components/posts/PostTags"));

var _PostAuthors = _interopRequireDefault(require("../components/posts/PostAuthors"));

var _PostContent = _interopRequireDefault(require("../components/posts/PostContent"));

var _RelatedProject = _interopRequireDefault(require("../components/related/RelatedProject"));

var _RelatedPosts = _interopRequireDefault(require("../components/related/RelatedPosts"));

var _LoadingPattern = _interopRequireDefault(require("../components/patterns/LoadingPattern"));

var _InnerNav = _interopRequireDefault(require("../components/InnerNav"));

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

var Post =
/*#__PURE__*/
function (_Component) {
  _inherits(Post, _Component);

  function Post() {
    _classCallCheck(this, Post);

    return _possibleConstructorReturn(this, _getPrototypeOf(Post).apply(this, arguments));
  }

  _createClass(Post, [{
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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var content = nextProps.content,
          isFetching = nextProps.isFetching;

      if (!isFetching && typeof content.id === 'undefined') {
        this.fetchData();
      }
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this$props2 = this.props,
          fetchPosts = _this$props2.fetchPosts,
          match = _this$props2.match;
      var id = match.params.id;
      fetchPosts(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          content = _this$props3.content,
          innerNavContent = _this$props3.innerNavContent,
          isFetching = _this$props3.isFetching,
          match = _this$props3.match;
      var tags = content.tags,
          date = content.date,
          author = content.author,
          mainContent = content.mainContent,
          externalPostUrl = content.externalPostUrl,
          externalPostSource = content.externalPostSource,
          relatedProject = content.relatedProject;
      var id = match.params.id;

      if (isFetching || typeof content.id === 'undefined') {
        return _react.default.createElement("div", {
          className: "loader"
        }, _react.default.createElement(_LoadingPattern.default, null));
      }

      return _react.default.createElement("article", {
        className: "post"
      }, _react.default.createElement("header", {
        className: "post__header"
      }, _react.default.createElement("h1", {
        className: "post__title main-title"
      }, content.title), tags && _react.default.createElement(_PostTags.default, {
        content: tags
      }), " ", ' ', date && _react.default.createElement("div", {
        className: "post__meta post__date"
      }, _react.default.createElement("span", {
        className: "label"
      }, "On "), _react.default.createElement("span", {
        className: "post__meta__item"
      }, date)), ' ', author && _react.default.createElement(_PostAuthors.default, {
        content: author
      }), ' '), mainContent && _react.default.createElement(_PostContent.default, {
        content: mainContent
      }), externalPostUrl && _react.default.createElement("div", {
        className: "post__external-link"
      }, _react.default.createElement("span", null, "Read full article on "), _react.default.createElement("a", {
        href: externalPostUrl,
        target: "_blank"
      }, _react.default.createElement("span", null, ' ->'), _react.default.createElement("span", null, externalPostSource))), !relatedProject ? null : _react.default.createElement("aside", {
        className: "related-content post__related"
      }, relatedProject && _react.default.createElement(_RelatedProject.default, {
        id: relatedProject[0].sys.id,
        content: relatedProject[0].fields,
        type: relatedProject[0].sys.contentType.sys.id
      }), _react.default.createElement(_RelatedPosts.default, {
        id: relatedProject[0].sys.id,
        postID: id
      })), _react.default.createElement(_InnerNav.default, _extends({}, innerNavContent, {
        type: "journal"
      })));
    }
  }], [{
    key: "fetchData",
    //eslint-disable-line
    value: function fetchData(store) {
      return store.dispatch((0, _actions.fetchPosts)());
    }
  }]);

  return Post;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var match = ownProps.match;
  var id = match.params.id;
  return {
    content: (0, _reducers.getPost)(state, id),
    innerNavContent: (0, _reducers.getNextPrev)(state, id, 'journal'),
    isFetching: (0, _reducers.isPostFetching)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchPosts: _actions.fetchPosts
  }, dispatch);
};

Post.propTypes = {
  content: _propTypes.default.shape({
    id: _propTypes.default.string
  }),
  isFetching: _propTypes.default.bool.isRequired,
  fetchPosts: _propTypes.default.func.isRequired
};
Post.defaultProps = {
  content: {}
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Post));

exports.default = _default;