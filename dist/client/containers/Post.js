'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = require('../actions');

var _reducers = require('../reducers');

var _PostTags = require('../components/posts/PostTags');

var _PostTags2 = _interopRequireDefault(_PostTags);

var _PostAuthors = require('../components/posts/PostAuthors');

var _PostAuthors2 = _interopRequireDefault(_PostAuthors);

var _PostContent = require('../components/posts/PostContent');

var _PostContent2 = _interopRequireDefault(_PostContent);

var _RelatedProject = require('../components/related/RelatedProject');

var _RelatedProject2 = _interopRequireDefault(_RelatedProject);

var _RelatedPosts = require('../components/related/RelatedPosts');

var _RelatedPosts2 = _interopRequireDefault(_RelatedPosts);

var _LoadingPattern = require('../components/patterns/LoadingPattern');

var _LoadingPattern2 = _interopRequireDefault(_LoadingPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_Component) {
	_inherits(Post, _Component);

	function Post() {
		_classCallCheck(this, Post);

		return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
	}

	_createClass(Post, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    content = _props.content,
			    isFetching = _props.isFetching;

			if (!isFetching && typeof content.id === 'undefined') {
				this.fetchData();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var content = nextProps.content,
			    isFetching = nextProps.isFetching;

			if (!isFetching && typeof content.id === 'undefined') {
				this.fetchData();
			}
		}
	}, {
		key: 'fetchData',
		value: function fetchData() {
			var _props2 = this.props,
			    fetchPost = _props2.fetchPost,
			    match = _props2.match;

			var id = match.params.id;
			fetchPost(id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    content = _props3.content,
			    isFetching = _props3.isFetching,
			    match = _props3.match;
			var tags = content.tags,
			    date = content.date,
			    author = content.author,
			    mainContent = content.mainContent,
			    externalPostUrl = content.externalPostUrl,
			    externalPostSource = content.externalPostSource,
			    relatedProject = content.relatedProject;

			var id = match.params.id;
			if (isFetching || typeof content.id === 'undefined') {
				return _react2.default.createElement(
					'div',
					{ className: 'loader' },
					_react2.default.createElement(_LoadingPattern2.default, null)
				);
			}
			return _react2.default.createElement(
				'article',
				{ className: 'post' },
				_react2.default.createElement(
					'header',
					{ className: 'post__header' },
					_react2.default.createElement(
						'h1',
						{ className: 'post__title main-title' },
						content.title
					),
					tags && _react2.default.createElement(_PostTags2.default, { content: tags }),
					' ',
					' ',
					date && _react2.default.createElement(
						'div',
						{ className: 'post__meta post__date' },
						_react2.default.createElement(
							'span',
							{ className: 'label' },
							'On '
						),
						_react2.default.createElement(
							'span',
							{ className: 'post__meta__item' },
							date
						)
					),
					' ',
					author && _react2.default.createElement(_PostAuthors2.default, { content: author }),
					' '
				),
				mainContent && _react2.default.createElement(_PostContent2.default, { content: mainContent }),
				externalPostUrl && _react2.default.createElement(
					'div',
					{ className: 'post__external-link' },
					'Read full article on ',
					_react2.default.createElement(
						'a',
						{ href: externalPostUrl, target: '_blank' },
						' ->',
						externalPostSource
					)
				),
				!relatedProject ? null : _react2.default.createElement(
					'aside',
					{ className: 'related-content post__related' },
					relatedProject && _react2.default.createElement(_RelatedProject2.default, { id: relatedProject[0].sys.id, content: relatedProject[0].fields }),
					_react2.default.createElement(_RelatedPosts2.default, { id: relatedProject[0].sys.id, postID: id })
				)
			);
		}
	}], [{
		key: 'fetchData',
		//eslint-disable-line
		value: function fetchData(store, id) {
			return store.dispatch((0, _actions.fetchPost)(id));
		}
	}]);

	return Post;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	var match = ownProps.match;

	var id = match.params.id;
	return {
		content: (0, _reducers.getPost)(state, id),
		isFetching: (0, _reducers.isPostFetching)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ fetchPost: _actions.fetchPost }, dispatch);
};

Post.propTypes = {
	content: _propTypes2.default.shape({
		id: _propTypes2.default.string
	}),
	isFetching: _propTypes2.default.bool.isRequired,
	fetchPost: _propTypes2.default.func.isRequired
};

Post.defaultProps = {
	content: {}
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Post));