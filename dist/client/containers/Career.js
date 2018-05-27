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

var _BodyText = require('../components/BodyText');

var _BodyText2 = _interopRequireDefault(_BodyText);

var _LoadingPattern = require('../components/patterns/LoadingPattern');

var _LoadingPattern2 = _interopRequireDefault(_LoadingPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Career = function (_Component) {
	_inherits(Career, _Component);

	function Career() {
		_classCallCheck(this, Career);

		return _possibleConstructorReturn(this, (Career.__proto__ || Object.getPrototypeOf(Career)).apply(this, arguments));
	}

	_createClass(Career, [{
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
			    fetchCareer = _props2.fetchCareer,
			    match = _props2.match;

			var id = match.params.id;
			fetchCareer(id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    content = _props3.content,
			    isFetching = _props3.isFetching;
			var title = content.title,
			    description = content.description;

			return isFetching || typeof content.id === 'undefined' ? _react2.default.createElement(
				'div',
				{ className: 'loader' },
				_react2.default.createElement(_LoadingPattern2.default, null)
			) : _react2.default.createElement(
				'article',
				{ className: 'career' },
				_react2.default.createElement(
					'header',
					{ className: 'career__header' },
					_react2.default.createElement(
						'h1',
						{ className: 'main-title career__title' },
						title
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'career__content' },
					_react2.default.createElement(_BodyText2.default, { content: description })
				)
			);
		}
	}], [{
		key: 'fetchData',
		//eslint-disable-line
		value: function fetchData(store, id) {
			return store.dispatch((0, _actions.fetchCareer)(id));
		}
	}]);

	return Career;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	var match = ownProps.match;

	var id = match.params.id;
	return {
		content: (0, _reducers.getCareer)(state, id),
		isFetching: (0, _reducers.isCareerFetching)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ fetchCareer: _actions.fetchCareer }, dispatch);
};

Career.propTypes = {
	content: _propTypes2.default.shape({
		id: _propTypes2.default.string
	}),
	isFetching: _propTypes2.default.bool.isRequired,
	fetchCareer: _propTypes2.default.func.isRequired
};

Career.defaultProps = {
	content: {}
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Career));