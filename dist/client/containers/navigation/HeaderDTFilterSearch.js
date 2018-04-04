'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _reducers = require('../../reducers');

var _actions = require('../../actions');

var actions = _interopRequireWildcard(_actions);

var _HeaderPatternChunk = require('./HeaderPatternChunk');

var _HeaderPatternChunk2 = _interopRequireDefault(_HeaderPatternChunk);

var _HeaderDTFilterSearchFilter = require('./HeaderDTFilterSearchFilter');

var _HeaderDTFilterSearchFilter2 = _interopRequireDefault(_HeaderDTFilterSearchFilter);

var _HeaderDTFilterSearchSearch = require('./HeaderDTFilterSearchSearch');

var _HeaderDTFilterSearchSearch2 = _interopRequireDefault(_HeaderDTFilterSearchSearch);

var _HeaderDTFiltersList = require('./HeaderDTFiltersList');

var _HeaderDTFiltersList2 = _interopRequireDefault(_HeaderDTFiltersList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderDTFilterSearch = function (_Component) {
	_inherits(HeaderDTFilterSearch, _Component);

	function HeaderDTFilterSearch() {
		_classCallCheck(this, HeaderDTFilterSearch);

		var _this = _possibleConstructorReturn(this, (HeaderDTFilterSearch.__proto__ || Object.getPrototypeOf(HeaderDTFilterSearch)).call(this));

		_this.state = {
			filtersAreVisible: false,
			searchIsVisible: false
		};
		_this.onfilterClick = _this.onfilterClick.bind(_this);
		_this.onSearchClick = _this.onSearchClick.bind(_this);
		_this.onSearchSubmit = _this.onSearchSubmit.bind(_this);
		_this.clearSearch = _this.clearSearch.bind(_this);
		return _this;
	}

	_createClass(HeaderDTFilterSearch, [{
		key: 'toggleFilter',
		value: function toggleFilter() {
			this.setState({
				filtersAreVisible: !this.state.filtersAreVisible
			});
		}
	}, {
		key: 'onfilterClick',
		value: function onfilterClick() {
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
				searchIsVisible: !this.state.searchIsVisible
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
			return false;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    content = _props2.content,
			    location = _props2.location;

			var fixedStart = window.innerWidth > 1280 ? 11 : 8;
			var config = {
				separator: '/',
				filter: {
					name: 'Filter',
					glyph: { className: 'ind', content: '+' },
					spacesBefore: 3,
					spacesAfter: 2
				},
				search: {
					name: 'Search',
					glyph: { className: 'ind', content: ':' },
					searchInputSize: 32,
					spacesBefore: 3,
					spacesAfter: 2
				}
			};
			var reservedSearchSize = config.search.name.length + config.search.glyph.content.length + config.search.searchInputSize;
			var reservedFilterSize = location.pathname !== '/' ? 0 : config.filter.name.length + config.filter.glyph.content.length;
			var reservedEmptySpaces = location.pathname !== '/' ? config.search.spacesAfter + config.search.spacesBefore : config.search.spacesAfter + config.search.spacesBefore + config.filter.spacesAfter + config.filter.spacesBefore;
			var numberofNavSeparators = 1;
			var totalReservedSpaces = reservedSearchSize + reservedFilterSize + reservedEmptySpaces + numberofNavSeparators + fixedStart;
			return _react2.default.createElement(
				'div',
				{ className: 'header--desktop__main' },
				_react2.default.createElement(_HeaderPatternChunk2.default, { fixed: fixedStart }),
				reservedFilterSize === 0 ? null : _react2.default.createElement(_HeaderDTFilterSearchFilter2.default, { filtersAreVisible: this.state.filtersAreVisible, onfilterClick: this.onfilterClick, config: config.filter }),
				_react2.default.createElement(_HeaderDTFilterSearchSearch2.default, { searchIsVisible: this.state.searchIsVisible, onSearchClick: this.onSearchClick, onSearchSubmit: this.onSearchSubmit, config: config.search }),
				_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: totalReservedSpaces }),
				this.state.filtersAreVisible ? _react2.default.createElement(_HeaderDTFiltersList2.default, { content: content }) : null
			);
		}
	}]);

	return HeaderDTFilterSearch;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		content: (0, _reducers.getFilters)(state)
	};
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(HeaderDTFilterSearch));