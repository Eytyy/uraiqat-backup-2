'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = function (_Component) {
	_inherits(Preview, _Component);

	function Preview() {
		_classCallCheck(this, Preview);

		return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
	}

	_createClass(Preview, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var previewHeight = this.previewBlock.offsetHeight;
			var heightRelativeToCharHeight = previewHeight % 32;
			var padding = heightRelativeToCharHeight === 0 ? 0 : (1 - heightRelativeToCharHeight / 32) * 32;
			this.previewBlock.style.paddingBottom = padding + 'px';
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    classList = _props.classList,
			    children = _props.children;

			return _react2.default.createElement(
				'article',
				{ ref: function ref(el) {
						_this2.previewBlock = el;
					}, className: classList },
				children
			);
		}
	}]);

	return Preview;
}(_react.Component);

exports.default = Preview;