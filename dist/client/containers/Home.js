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

var _redux = require('redux');

var _actions = require('../actions');

var _reducers = require('../reducers');

var _Landing = require('../components/landing/Landing');

var _Landing2 = _interopRequireDefault(_Landing);

var _LoadingPattern = require('../components/patterns/LoadingPattern');

var _LoadingPattern2 = _interopRequireDefault(_LoadingPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

		_this.state = {
			intro: false
		};
		_this.to = null;
		return _this;
	}

	_createClass(Home, [{
		key: 'hideLoader',
		value: function hideLoader() {
			this.setState({
				intro: true
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var fetchPosts = this.props.fetchPosts;

			return fetchPosts().then(function () {
				setTimeout(function () {
					_this2.hideLoader();
				}, 300);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    isFetching = _props.isFetching,
			    content = _props.content;

			if (isFetching && content.length === 0 || content.length === 0 || !this.state.intro) {
				return _react2.default.createElement(
					'div',
					{ className: 'loader' },
					_react2.default.createElement(_LoadingPattern2.default, null)
				);
			}
			return _react2.default.createElement(_Landing2.default, { content: content, page: 'journal' });
		}
	}], [{
		key: 'fetchData',
		value: function fetchData(store) {
			return store.dispatch((0, _actions.fetchPosts)());
		}
	}]);

	return Home;
}(_react.Component);

Home.propTypes = {
	isFetching: _propTypes2.default.bool.isRequired,
	fetchPosts: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		isFetching: (0, _reducers.isPostsFetching)(state),
		content: (0, _reducers.getPosts)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ fetchPosts: _actions.fetchPosts }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);