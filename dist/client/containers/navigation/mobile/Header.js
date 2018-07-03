'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _actions = require('../../../actions');

var actions = _interopRequireWildcard(_actions);

var _reducers = require('../../../reducers');

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

var _Filters = require('./Filters');

var _Filters2 = _interopRequireDefault(_Filters);

var _PatternChunk = require('../../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.state = {
			isVisible: false,
			filtersAreVisible: false,
			searchIsVisible: false
		};
		_this.onMenuToggle = _this.onMenuToggle.bind(_this);
		_this.toggleFilter = _this.toggleFilter.bind(_this);
		_this.onToggleFilters = _this.onToggleFilters.bind(_this);
		_this.onFilterClick = _this.onFilterClick.bind(_this);
		_this.onSearchClick = _this.onSearchClick.bind(_this);
		_this.onSearchSubmit = _this.onSearchSubmit.bind(_this);
		_this.clearSearch = _this.clearSearch.bind(_this);
		return _this;
	}

	_createClass(Header, [{
		key: 'toggleFilter',
		value: function toggleFilter() {
			this.setState({
				filtersAreVisible: !this.state.filtersAreVisible,
				searchIsVisible: this.state.searchIsVisible ? !this.state.searchIsVisible : this.state.searchIsVisible
			});
		}
	}, {
		key: 'onToggleFilters',
		value: function onToggleFilters() {
			var _this2 = this;

			var _props = this.props,
			    fetchFilters = _props.fetchFilters,
			    content = _props.content;

			if (!this.state.filtersAreVisible) {
				if (content.length === 0) {
					fetchFilters().then(function () {
						_this2.toggleFilter();
					});
				} else {
					this.toggleFilter();
				}
			} else {
				this.toggleFilter();
			}
		}
	}, {
		key: 'onFilterClick',
		value: function onFilterClick(id) {
			var updateFilter = this.props.updateFilter;

			updateFilter(id);
		}
	}, {
		key: 'clearSearch',
		value: function clearSearch() {
			if (this.search) {
				this.search.value = '';
			}
		}
	}, {
		key: 'onSearchClick',
		value: function onSearchClick() {
			this.setState({
				searchIsVisible: !this.state.searchIsVisible,
				filtersAreVisible: this.state.filtersAreVisible ? !this.state.filtersAreVisible : this.state.filtersAreVisible
			});
		}
	}, {
		key: 'onSearchSubmit',
		value: function onSearchSubmit(event) {
			var fetchSearchResults = this.props.fetchSearchResults;

			var keyword = new FormData(event.target).get('keyword');
			fetchSearchResults(keyword);
			event.preventDefault();
			this.props.history.push('/search?keyword=' + keyword);
			this.clearSearch();
			this.onSearchClick();
			return false;
		}
	}, {
		key: 'onMenuToggle',
		value: function onMenuToggle() {
			var isMenuvisible = this.state.isVisible;
			if (!isMenuvisible) {
				isMenuvisible = true;
				document.body.classList.add('mobileMenu-isActive');
			} else {
				isMenuvisible = false;
				document.body.classList.remove('mobileMenu-isActive');
			}
			this.setState({
				isVisible: isMenuvisible
			});
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.location.pathname !== this.props.location.pathname) {
				var filterState = this.state.filtersAreVisible;
				var searchState = this.state.searchIsVisible;
				if (this.state.filtersAreVisible) {
					filterState = !this.state.filtersAreVisible;
				}
				if (this.state.searchIsVisible) {
					searchState = !this.state.searchIsVisible;
				}
				if (this.state.isVisible) {
					this.onMenuToggle();
				}
				this.setState({
					searchIsVisible: searchState,
					filtersAreVisible: filterState
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var navigation = [{ name: 'Practice', link: '/practice', glyph: { className: 'ind', content: '<-' }, size: 'Practice'.length }, { name: 'Work', link: '/work', glyph: { className: 'ind', content: '<-' }, size: 'Work'.length }, { name: 'Atelier', link: '/atelier', glyph: { className: 'ind', content: '<-' }, size: 'Atelier'.length }, { name: 'Contact', link: '/contact', glyph: { className: 'ind', content: '<-' }, size: 'Contact'.length }];
			var _props2 = this.props,
			    configs = _props2.configs,
			    content = _props2.content;
			var adjustForMobile = configs.adjustForMobile;


			return _react2.default.createElement(
				'div',
				{ className: 'website-header__inner website-header__inner--mobile wrapper' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ className: 'link uLink', to: '/' },
						'U'
					),
					_react2.default.createElement(_PatternChunk2.default, { adjust: adjustForMobile, reserved: 2 }),
					_react2.default.createElement('span', { className: 'mobile-menu-toggle-overlay', onClick: this.onMenuToggle }),
					this.state.isVisible ? _react2.default.createElement(
						'span',
						{ className: 'mobile-menu-toggle link', onClick: this.onMenuToggle },
						'x'
					) : _react2.default.createElement(
						'span',
						{ className: 'mobile-menu-toggle link', onClick: this.onMenuToggle },
						':'
					)
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_PatternChunk2.default, { reserved: 0, adjust: adjustForMobile })
				),
				this.state.isVisible && _react2.default.createElement(
					'div',
					{ className: 'menu' },
					_react2.default.createElement(
						'div',
						{ className: 'menu__inner' },
						_react2.default.createElement(_Main2.default, { adjust: adjustForMobile, navigation: navigation }),
						_react2.default.createElement(_Search2.default, {
							adjust: adjustForMobile,
							searchIsVisible: this.state.searchIsVisible,
							onSearchClick: this.onSearchClick,
							onSearchSubmit: this.onSearchSubmit
						}),
						_react2.default.createElement(_Filters2.default, {
							onFilterClick: this.onFilterClick,
							onToggle: this.onToggleFilters,
							adjust: adjustForMobile,
							filtersAreVisible: this.state.filtersAreVisible,
							content: content
						}),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_PatternChunk2.default, { adjust: adjustForMobile, reserved: 0 })
						),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_PatternChunk2.default, { adjust: adjustForMobile, reserved: 0 })
						)
					)
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		configs: (0, _reducers.getAppConfigs)(state),
		content: (0, _reducers.getFilters)(state)
	};
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(Header));