'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _CommaSpearatedList = require('../components/CommaSpearatedList');

var _CommaSpearatedList2 = _interopRequireDefault(_CommaSpearatedList);

var _BodyText = require('../components/BodyText');

var _BodyText2 = _interopRequireDefault(_BodyText);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _RelatedPosts = require('../components/related/RelatedPosts');

var _RelatedPosts2 = _interopRequireDefault(_RelatedPosts);

var _InnerNav = require('../components/InnerNav');

var _InnerNav2 = _interopRequireDefault(_InnerNav);

var _LoadingPattern = require('../components/patterns/LoadingPattern');

var _LoadingPattern2 = _interopRequireDefault(_LoadingPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_Component) {
	_inherits(Project, _Component);

	//eslint-disable-line
	function Project() {
		_classCallCheck(this, Project);

		var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this));

		_this.state = {
			isAboutVisible: false,
			shouldAboutRetract: true
		};
		_this.toggleAbout = _this.toggleAbout.bind(_this);
		return _this;
	}

	_createClass(Project, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var fetchProjects = this.props.fetchProjects;

			fetchProjects().then(function () {
				var shouldAboutRetract = document.querySelectorAll('.project__about .field-body p').length > 1 ? true : false;
				_this2.setState({
					shouldAboutRetract: shouldAboutRetract
				});
			});
		}
	}, {
		key: 'toggleAbout',
		value: function toggleAbout() {
			this.setState({
				isAboutVisible: !this.state.isAboutVisible
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    content = _props.content,
			    innerNavContent = _props.innerNavContent,
			    isFetching = _props.isFetching,
			    match = _props.match;

			if (isFetching || typeof content.id === 'undefined') {
				return _react2.default.createElement(
					'div',
					{ className: 'loader' },
					_react2.default.createElement(_LoadingPattern2.default, null)
				);
			}
			var title = content.title,
			    aboutTheProject = content.aboutTheProject,
			    drawings = content.drawings,
			    mainSlider = content.mainSlider,
			    location = content.location,
			    year = content.year,
			    budget = content.budget,
			    area = content.area,
			    status = content.status,
			    typology = content.typology;

			return _react2.default.createElement(
				'article',
				{ className: 'project' },
				_react2.default.createElement(
					'header',
					null,
					_react2.default.createElement(
						'h1',
						{ className: 'main-title' },
						title
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'project__top' },
					_react2.default.createElement(
						'div',
						{ className: 'project__media' },
						_react2.default.createElement(_Slider2.default, { contentTitle: title, sliderName: 'project-main-slider', classList: 'slider--main', sliderId: content.id + 'm', imagesQuery: '?fl=progressive&w=826', content: mainSlider })
					),
					_react2.default.createElement(
						'div',
						{ className: 'project__meta' },
						typology && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item typology' },
							_react2.default.createElement(_CommaSpearatedList2.default, { classList: '', content: typology })
						),
						location && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(
								'span',
								{ className: 'label' },
								'Location: '
							),
							location
						),
						year && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(
								'span',
								{ className: 'label' },
								'Year: '
							),
							year
						),
						area && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(
								'span',
								{ className: 'label' },
								'Area: '
							),
							area
						),
						budget && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(
								'span',
								{ className: 'label' },
								'Budget: '
							),
							budget
						),
						status && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(
								'span',
								{ className: 'label' },
								'Status: '
							),
							status
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'project__bottom' },
					_react2.default.createElement(
						'div',
						{ className: 'project__about ' + (this.state.isAboutVisible ? 'js-isExpanded' : '') },
						_react2.default.createElement(_BodyText2.default, { content: aboutTheProject }),
						this.state.shouldAboutRetract && _react2.default.createElement(
							'span',
							{ className: 'toggle-project-about', onClick: this.toggleAbout },
							this.state.isAboutVisible ? '- read less' : '+ read more'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'project__drawings' },
						_react2.default.createElement(_Slider2.default, { type: 'drawings', contentTitle: title, sliderName: 'project-drawings-slider', sliderId: content.id + 'd', classList: 'slider--small', imagesQuery: '?fl=progressive&w=668', content: drawings })
					)
				),
				_react2.default.createElement(
					'aside',
					{ className: 'related-content project__related' },
					_react2.default.createElement(_RelatedPosts2.default, { id: match.params.id })
				),
				_react2.default.createElement(_InnerNav2.default, _extends({}, innerNavContent, { type: 'work' }))
			);
		}
	}], [{
		key: 'fetchData',
		value: function fetchData(store) {
			return store.dispatch((0, _actions.fetchProjects)());
		}
	}]);

	return Project;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	var match = ownProps.match;

	var id = match.params.id;
	return {
		content: (0, _reducers.getProject)(state, id),
		innerNavContent: (0, _reducers.getNextPrev)(state, id, 'work'),
		isFetching: (0, _reducers.isProjectsFetching)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ fetchProjects: _actions.fetchProjects }, dispatch);
};

Project.propTypes = {
	content: _propTypes2.default.shape({
		id: _propTypes2.default.string
	}),
	isFetching: _propTypes2.default.bool.isRequired,
	fetchProjects: _propTypes2.default.func.isRequired
};

Project.defaultProps = {
	content: {}
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Project));