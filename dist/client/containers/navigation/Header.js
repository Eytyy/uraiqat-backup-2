'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeaderDT = require('./HeaderDT');

var _HeaderDT2 = _interopRequireDefault(_HeaderDT);

var _HeaderM = require('./HeaderM');

var _HeaderM2 = _interopRequireDefault(_HeaderM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

		_this.state = {
			width: 0,
			height: 0
		};
		_this.updateDimensions = _this.updateDimensions.bind(_this);
		return _this;
	}

	_createClass(Header, [{
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
				return _react2.default.createElement('header', { className: 'website-header' });
			}
			return _react2.default.createElement(
				'header',
				{ className: 'website-header' },
				this.state.width >= 1024 ? _react2.default.createElement(_HeaderDT2.default, null) : _react2.default.createElement(_HeaderM2.default, null)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;