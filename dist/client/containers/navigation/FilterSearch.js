'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _actions = require('../../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterSearch = function (_Component) {
	_inherits(FilterSearch, _Component);

	function FilterSearch() {
		_classCallCheck(this, FilterSearch);

		var _this = _possibleConstructorReturn(this, (FilterSearch.__proto__ || Object.getPrototypeOf(FilterSearch)).call(this));

		_this.state = {
			searchIsVisible: false,
			filtersAreVisible: false
		};
		_this.onSearchClick = _this.onSearchClick.bind(_this);
		_this.onfilterClick = _this.onfilterClick.bind(_this);
		_this.onSearchSubmit = _this.onSearchSubmit.bind(_this);
		_this.clearSearch = _this.clearSearch.bind(_this);
		return _this;
	}

	_createClass(FilterSearch, [{
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
		key: 'onfilterClick',
		value: function onfilterClick() {}
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
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				'---/-/|<//',
				_react2.default.createElement(
					'span',
					{ className: 'ws' },
					'-'
				),
				_react2.default.createElement(
					'span',
					{ className: 'ws' },
					'-'
				),
				_react2.default.createElement(
					'span',
					{ className: 'link link--filter', onClick: this.onfilterClick },
					this.state.filtersAreVisible ? '-Filter' : '+Filter'
				),
				this.state.searchIsVisible ? _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					'/',
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					_react2.default.createElement(
						'span',
						{ className: 'link link--search', onClick: this.onSearchClick },
						'xSearch'
					),
					':',
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					_react2.default.createElement(
						'form',
						{ onSubmit: this.onSearchSubmit, className: 'search' },
						_react2.default.createElement('input', { autoComplete: 'off', name: 'keyword', ref: function ref(el) {
								return _this2.search = el;
							}, className: 'search__input', type: 'text', placeholder: 'Enter your search keyword here' }),
						_react2.default.createElement(
							'span',
							{ className: 'ws' },
							'-'
						),
						_react2.default.createElement(
							'span',
							{ className: 'ws' },
							'-'
						),
						'<//-////-\\-----/-/|<//-////-\\---'
					)
				) : _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					'/',
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					_react2.default.createElement(
						'span',
						{ className: 'link link--search', onClick: this.onSearchClick },
						'Search'
					),
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					'//-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\---'
				)
			);
		}
	}]);

	return FilterSearch;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, actions)(FilterSearch));