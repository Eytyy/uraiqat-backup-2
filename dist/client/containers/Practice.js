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

var _Basic = require('../components/practice/Basic');

var _Basic2 = _interopRequireDefault(_Basic);

var _Careers = require('../components/practice/Careers');

var _Careers2 = _interopRequireDefault(_Careers);

var _Team = require('../components/practice/Team');

var _Team2 = _interopRequireDefault(_Team);

var _LoadingPattern = require('../components/patterns/LoadingPattern');

var _LoadingPattern2 = _interopRequireDefault(_LoadingPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Practice = function (_Component) {
	_inherits(Practice, _Component);

	function Practice() {
		_classCallCheck(this, Practice);

		return _possibleConstructorReturn(this, (Practice.__proto__ || Object.getPrototypeOf(Practice)).apply(this, arguments));
	}

	_createClass(Practice, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var fetchPractice = this.props.fetchPractice;

			return fetchPractice();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    isFetching = _props.isFetching,
			    content = _props.content;

			if (isFetching && content.length === 0 || typeof content.fields === 'undefined') {
				return _react2.default.createElement(
					'div',
					{ className: 'loader' },
					_react2.default.createElement(_LoadingPattern2.default, null)
				);
			}
			return _react2.default.createElement(
				'section',
				{ className: 'landing-page landing-page--practice main-section' },
				_react2.default.createElement(_Basic2.default, { sectionTitle: 'about', content: content.fields.about }),
				_react2.default.createElement(_Basic2.default, { sectionTitle: 'philosophy', content: content.fields.philosophy }),
				_react2.default.createElement(_Team2.default, { content: content.fields.team }),
				_react2.default.createElement(_Careers2.default, { content: content.fields.careers })
			);
		}
	}], [{
		key: 'fetchData',
		value: function fetchData(store) {
			return store.dispatch((0, _actions.fetchPractice)());
		}
	}]);

	return Practice;
}(_react.Component);

Practice.propTypes = {
	isFetching: _propTypes2.default.bool.isRequired,
	fetchPractice: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		isFetching: (0, _reducers.isPracticeFetching)(state),
		content: (0, _reducers.getPracticeContent)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ fetchPractice: _actions.fetchPractice }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Practice);