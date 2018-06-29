'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _actions = require('../../../actions');

var actions = _interopRequireWildcard(_actions);

var _reducers = require('../../../reducers');

var _PatternChunk = require('../../../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

var _FiltersList = require('./FiltersList');

var _FiltersList2 = _interopRequireDefault(_FiltersList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterToggle = function (_Component) {
	_inherits(FilterToggle, _Component);

	function FilterToggle() {
		_classCallCheck(this, FilterToggle);

		var _this = _possibleConstructorReturn(this, (FilterToggle.__proto__ || Object.getPrototypeOf(FilterToggle)).call(this));

		_this.onfiltersClick = _this.onfiltersClick.bind(_this);
		_this.onFilterClick = _this.onFilterClick.bind(_this);
		return _this;
	}

	_createClass(FilterToggle, [{
		key: 'onFilterClick',
		value: function onFilterClick(id) {
			var updateFilter = this.props.updateFilter;

			updateFilter(id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    content = _props.content,
			    location = _props.location,
			    adjustForMobile = _props.adjustForMobile,
			    onToggle = _props.onToggle;

			var config = {
				name: 'Filter',
				glyph: { className: 'ind', content: '+' },
				spacesAfter: 4
			};
			var reservedFilterSize = location.pathname !== '/' ? 0 : config.name.length + config.spacesAfter;
			if (reservedFilterSize === 0) {
				return null;
			}
			return _react2.default.createElement(
				'div',
				{ className: 'header-mobile__filters' },
				_react2.default.createElement(
					'span',
					{ className: 'link', onClick: this.onfiltersClick },
					config.name
				),
				this.state.filtersAreVisible ? ':' : _react2.default.createElement(
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
					{ className: 'ws' },
					'-'
				),
				_react2.default.createElement(_PatternChunk2.default, { reserved: reservedFilterSize, adjust: adjustForMobile }),
				this.state.filtersAreVisible ? _react2.default.createElement(
					'span',
					{ onClick: onToggle, className: 'link' },
					'x'
				) : '<',
				this.state.filtersAreVisible && _react2.default.createElement(_FiltersList2.default, { onFilterClick: this.onFilterClick, content: content, adjust: adjustForMobile })
			);
		}
	}]);

	return FilterToggle;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		content: (0, _reducers.getFilters)(state)
	};
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(FilterToggle));