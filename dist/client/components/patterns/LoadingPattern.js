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

var _PatternLine = require('./PatternLine');

var _PatternLine2 = _interopRequireDefault(_PatternLine);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingPattern = function (_Component) {
	_inherits(LoadingPattern, _Component);

	function LoadingPattern(props) {
		_classCallCheck(this, LoadingPattern);

		var _this = _possibleConstructorReturn(this, (LoadingPattern.__proto__ || Object.getPrototypeOf(LoadingPattern)).call(this, props));

		_this.to = null;
		_this.state = {
			tick: 0
		};
		_this.loadPattern = _this.loadPattern.bind(_this);
		_this.reloadPattern = _this.reloadPattern.bind(_this);
		return _this;
	}

	_createClass(LoadingPattern, [{
		key: 'loadPattern',
		value: function loadPattern() {
			var adjustForMobile = this.props.configs.adjustForMobile;

			var windowSize = (0, _helpers.getWindowDimensions)();
			var maxWidth = (0, _helpers.getMaxWidth)();
			var font = (0, _helpers.getFontValues)();
			var config = {
				w: maxWidth,
				h: windowSize.h - font.characterHeight * 2
			};
			var numberOfLines = (0, _helpers.getNoOfChars)('loading', config, adjustForMobile);
			var fakeArray = Array(numberOfLines.y).fill('pl');
			return {
				fakeArray: fakeArray,
				numberOfLines: numberOfLines
			};
		}
	}, {
		key: 'reloadPattern',
		value: function reloadPattern() {
			this.setState({
				tick: this.state.tick + 1
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.to = window.setInterval(this.reloadPattern, 250);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.clearInterval(this.to);
		}
	}, {
		key: 'render',
		value: function render() {
			if (typeof window === 'undefined') {
				return _react2.default.createElement('div', { className: 'pattern pattern--loading' });
			}

			var pattern = this.loadPattern();

			return _react2.default.createElement(
				'div',
				{ className: 'pattern pattern--loading' },
				pattern.fakeArray.map(function (item, index) {
					return _react2.default.createElement(_PatternLine2.default, { key: 'pl-' + index, noOfChars: pattern.numberOfLines.x });
				})
			);
		}
	}]);

	return LoadingPattern;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		configs: (0, _reducers.getAppConfigs)(state)
	};
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(LoadingPattern));