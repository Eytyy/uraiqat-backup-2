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

var Atelier = function (_Component) {
	_inherits(Atelier, _Component);

	function Atelier() {
		_classCallCheck(this, Atelier);

		return _possibleConstructorReturn(this, (Atelier.__proto__ || Object.getPrototypeOf(Atelier)).apply(this, arguments));
	}

	_createClass(Atelier, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var fetchAtelierProjects = this.props.fetchAtelierProjects;

			return fetchAtelierProjects();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    isFetching = _props.isFetching,
			    content = _props.content;

			if (isFetching && typeof content.mainContent === 'undefined' || typeof content.mainContent === 'undefined') {
				return _react2.default.createElement(_LoadingPattern2.default, null);
			}
			return _react2.default.createElement(_Landing2.default, { content: content, page: 'atelier' });
		}
	}], [{
		key: 'fetchData',
		value: function fetchData(store) {
			return store.dispatch((0, _actions.fetchAtelierProjects)());
		}
	}]);

	return Atelier;
}(_react.Component);

Atelier.propTypes = {
	isFetching: _propTypes2.default.bool.isRequired,
	fetchAtelierProjects: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		isFetching: (0, _reducers.isAtelierProjectsFetching)(state),
		content: (0, _reducers.getAtelierProjects)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ fetchAtelierProjects: _actions.fetchAtelierProjects }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Atelier);