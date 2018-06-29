'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _reducers = require('../../../reducers');

var _actions = require('../../../actions');

var actions = _interopRequireWildcard(_actions);

var _PatternChunk = require('../../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

var _FiltersToggle = require('./FiltersToggle');

var _FiltersToggle2 = _interopRequireDefault(_FiltersToggle);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

var _FiltersList = require('./FiltersList');

var _FiltersList2 = _interopRequireDefault(_FiltersList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterSearchWrapper = function (_Component) {
	_inherits(FilterSearchWrapper, _Component);

	function FilterSearchWrapper() {
		_classCallCheck(this, FilterSearchWrapper);

		var _this = _possibleConstructorReturn(this, (FilterSearchWrapper.__proto__ || Object.getPrototypeOf(FilterSearchWrapper)).call(this));

		_this.state = {
			filtersAreVisible: false,
			searchIsVisible: false
		};
		_this.onToggleClick = _this.onToggleClick.bind(_this);
		_this.onFilterClick = _this.onFilterClick.bind(_this);
		_this.onSearchClick = _this.onSearchClick.bind(_this);
		_this.onSearchSubmit = _this.onSearchSubmit.bind(_this);
		_this.clearSearch = _this.clearSearch.bind(_this);
		return _this;
	}

	_createClass(FilterSearchWrapper, [{
		key: 'toggleFilter',
		value: function toggleFilter() {
			this.setState({
				filtersAreVisible: !this.state.filtersAreVisible,
				searchIsVisible: this.state.searchIsVisible ? !this.state.searchIsVisible : this.state.searchIsVisible
			});
		}
	}, {
		key: 'onToggleClick',
		value: function onToggleClick() {
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
				this.setState({
					searchIsVisible: searchState,
					filtersAreVisible: filterState
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    content = _props2.content,
			    location = _props2.location;

			var fixedStart = window.innerWidth >= 1280 ? 11 : 8;
			var config = {
				separator: '/',
				filter: {
					name: 'Filter',
					glyph: { className: 'ind', content: '+' },
					spacesBefore: 2,
					spacesAfter: 2
				},
				search: {
					name: 'Search',
					glyph: { className: 'ind', content: ':' },
					searchInputSize: 32,
					spacesBefore: 2,
					spacesAfter: 1
				}
			};
			var reservedSearchSize = config.search.name.length + config.search.glyph.content.length + config.search.searchInputSize;
			// filters don't have a reserved space if you're not on the home page
			var isFront = location.pathname === '/';
			var reservedFilterSize = !isFront ? 0 : config.filter.name.length + config.filter.glyph.content.length;
			var reservedEmptySpaces = !isFront ? config.search.spacesAfter + config.search.spacesBefore : config.search.spacesAfter + config.search.spacesBefore + config.filter.spacesAfter + config.filter.spacesBefore;
			var numberofNavSeparators = 1;
			var totalReservedSpaces = reservedSearchSize + reservedFilterSize + reservedEmptySpaces + numberofNavSeparators + fixedStart;
			return _react2.default.createElement(
				'div',
				{ className: 'header--desktop__main' },
				_react2.default.createElement(_PatternChunk2.default, { fixed: fixedStart }),
				reservedFilterSize !== 0 && _react2.default.createElement(_FiltersToggle2.default, {
					filtersAreVisible: this.state.filtersAreVisible,
					onToggle: this.onToggleClick,
					config: config.filter
				}),
				_react2.default.createElement(_Search2.default, {
					searchIsVisible: this.state.searchIsVisible,
					onSearchClick: this.onSearchClick,
					onSearchSubmit: this.onSearchSubmit,
					config: config.search,
					isFront: isFront
				}),
				_react2.default.createElement(_PatternChunk2.default, { reserved: totalReservedSpaces }),
				_react2.default.createElement(_FiltersList2.default, {
					onFilterClick: this.onFilterClick,
					content: content,
					isVisible: this.state.filtersAreVisible
				})
			);
		}
	}]);

	return FilterSearchWrapper;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		content: (0, _reducers.getFilters)(state)
	};
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(FilterSearchWrapper));