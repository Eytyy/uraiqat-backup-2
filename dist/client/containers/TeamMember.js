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

var _PostMediaImage = require('../components/home/PostMediaImage');

var _PostMediaImage2 = _interopRequireDefault(_PostMediaImage);

var _BodyText = require('../components/BodyText');

var _BodyText2 = _interopRequireDefault(_BodyText);

var _RelatedAuthorPosts = require('../components/related/RelatedAuthorPosts');

var _RelatedAuthorPosts2 = _interopRequireDefault(_RelatedAuthorPosts);

var _LoadingPattern = require('../components/patterns/LoadingPattern');

var _LoadingPattern2 = _interopRequireDefault(_LoadingPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamMember = function (_Component) {
	_inherits(TeamMember, _Component);

	function TeamMember() {
		_classCallCheck(this, TeamMember);

		return _possibleConstructorReturn(this, (TeamMember.__proto__ || Object.getPrototypeOf(TeamMember)).apply(this, arguments));
	}

	_createClass(TeamMember, [{
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
		key: 'fetchData',
		value: function fetchData() {
			var _props2 = this.props,
			    fetchTeamMember = _props2.fetchTeamMember,
			    match = _props2.match;

			var id = match.params.id;
			fetchTeamMember(id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    content = _props3.content,
			    isFetching = _props3.isFetching;
			var name = content.name,
			    profileImagevideo = content.profileImagevideo,
			    role = content.role,
			    about = content.about,
			    instagramLink = content.instagramLink,
			    facebookLink = content.facebookLink,
			    personalWebsiteLink = content.personalWebsiteLink,
			    twitterLink = content.twitterLink;

			if (isFetching || typeof content.id === 'undefined') {
				return _react2.default.createElement(
					'div',
					{ className: 'loader' },
					_react2.default.createElement(_LoadingPattern2.default, null)
				);
			}
			return _react2.default.createElement(
				'article',
				{ className: 'team-member' },
				_react2.default.createElement(
					'header',
					{ className: 'team-member__header' },
					name && _react2.default.createElement(
						'h1',
						{ className: 'main-title team-member__title' },
						name
					),
					role && _react2.default.createElement(
						'h2',
						{ className: 'team-member__role' },
						role
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'team-member__content' },
					_react2.default.createElement(
						'div',
						{ className: 'team-member__content__col team-member__content__col--left' },
						_react2.default.createElement(_PostMediaImage2.default, { orientation: 'portrait', patternId: 'team-member-inner', query: 'w=350', content: profileImagevideo }),
						_react2.default.createElement(
							'div',
							{ className: 'team-member__links' },
							personalWebsiteLink && _react2.default.createElement(
								'a',
								{ className: 'link', href: personalWebsiteLink, target: '_blank' },
								'Website'
							),
							facebookLink && _react2.default.createElement(
								'a',
								{ className: 'link', href: facebookLink, target: '_blank' },
								'Facebook'
							),
							instagramLink && _react2.default.createElement(
								'a',
								{ className: 'link', href: instagramLink, target: '_blank' },
								'Instagram'
							),
							twitterLink && _react2.default.createElement(
								'a',
								{ className: 'link', href: twitterLink, target: '_blank' },
								'Twitter'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'team-member__content__col team-member__content__col--right' },
						about && _react2.default.createElement(_BodyText2.default, { content: about })
					)
				),
				_react2.default.createElement(
					'aside',
					{ className: 'related-content team-member__related' },
					_react2.default.createElement(_RelatedAuthorPosts2.default, { name: name })
				)
			);
		}
	}], [{
		key: 'fetchData',
		//eslint-disable-line
		value: function fetchData(store, id) {
			return store.dispatch((0, _actions.fetchTeamMember)(id));
		}
	}]);

	return TeamMember;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	var match = ownProps.match;

	var id = match.params.id;
	return {
		content: (0, _reducers.getTeamMember)(state, id),
		isFetching: (0, _reducers.isTeamMemberFetching)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ fetchTeamMember: _actions.fetchTeamMember }, dispatch);
};

TeamMember.propTypes = {
	content: _propTypes2.default.shape({
		id: _propTypes2.default.string
	}),
	isFetching: _propTypes2.default.bool.isRequired,
	fetchTeamMember: _propTypes2.default.func.isRequired
};

TeamMember.defaultProps = {
	content: {}
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TeamMember));