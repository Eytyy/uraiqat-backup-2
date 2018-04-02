'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _HeaderPatternChunk = require('../containers/navigation/HeaderPatternChunk');

var _HeaderPatternChunk2 = _interopRequireDefault(_HeaderPatternChunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
	_inherits(Footer, _Component);

	function Footer() {
		_classCallCheck(this, Footer);

		var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

		_this.state = {
			width: 0,
			height: 0
		};
		_this.updateDimensions = _this.updateDimensions.bind(_this);
		return _this;
	}

	_createClass(Footer, [{
		key: 'updateDimensions',
		value: function updateDimensions() {
			var width = window.innerWidth;
			var height = window.innerHeight;

			this.setState({ width: width, height: height });
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.updateDimensions();
			window.addEventListener('resize', this.updateDimensions);
		}
	}, {
		key: 'render',
		value: function render() {
			if (typeof window === 'undefined') {
				return _react2.default.createElement('footer', { className: 'website-footer' });
			}
			return _react2.default.createElement(
				'footer',
				{ className: 'website-footer' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: 0 })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: 0 })
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: 1 }),
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ className: 'link', activeClassName: 'active', to: '/' },
						'A'
					)
				)
			);
		}
	}]);

	return Footer;
}(_react.Component);

exports.default = Footer;