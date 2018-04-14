'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _reducers = require('../reducers');

var _LoadingPattern = require('../components/patterns/LoadingPattern');

var _LoadingPattern2 = _interopRequireDefault(_LoadingPattern);

var _SearchPreview = require('../components/SearchPreview');

var _SearchPreview2 = _interopRequireDefault(_SearchPreview);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
	_inherits(Search, _Component);

	function Search() {
		_classCallCheck(this, Search);

		return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
	}

	_createClass(Search, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    content = _props.content,
			    isFetching = _props.isFetching,
			    keyword = _props.keyword;

			if (isFetching && content.length === 0) {
				return _react2.default.createElement(
					'div',
					{ className: 'loader' },
					_react2.default.createElement(_LoadingPattern2.default, null)
				);
			}
			return _react2.default.createElement(
				'section',
				{ className: 'landing-section landing-section--featured' },
				_react2.default.createElement(
					'h1',
					{ className: 'search-results-title' },
					content.length === 0 ? 'Couldn\'t find content with the keyword [' + keyword + ']' : 'Search results for [' + keyword + ']'
				),
				_react2.default.createElement(
					'div',
					{ className: 'search-results' },
					content.map(function (_ref) {
						var sys = _ref.sys,
						    fields = _ref.fields;
						return _react2.default.createElement(_SearchPreview2.default, { content: fields, type: sys.contentType.sys.id, id: sys.id, key: sys.id });
					})
				)
			);
		}
	}]);

	return Search;
}(_react.Component);

Search.propTypes = {
	isFetching: _propTypes2.default.bool.isRequired
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
	var location = _ref2.location;

	var query = typeof URLSearchParams !== 'undefined' ? new URLSearchParams(location.search) : '';
	var keyword = typeof URLSearchParams !== 'undefined' ? query.get('keyword') : '';
	return {
		isFetching: (0, _reducers.isSearchFetching)(state),
		content: (0, _reducers.getSearchResults)(state, keyword),
		keyword: keyword
	};
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(Search));