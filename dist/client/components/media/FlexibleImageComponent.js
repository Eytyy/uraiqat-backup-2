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

var FlexibleImageComponent = function (_Component) {
	_inherits(FlexibleImageComponent, _Component);

	function FlexibleImageComponent() {
		_classCallCheck(this, FlexibleImageComponent);

		return _possibleConstructorReturn(this, (FlexibleImageComponent.__proto__ || Object.getPrototypeOf(FlexibleImageComponent)).apply(this, arguments));
	}

	_createClass(FlexibleImageComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    content = _props.content,
			    setSliderHeight = _props.setSliderHeight;
			var _content$file$details = content.file.details.image,
			    width = _content$file$details.width,
			    height = _content$file$details.height;

			var imageHeight = Math.ceil(882 * (height / width / 32)) * 32;
			setSliderHeight(imageHeight);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    content = _props2.content,
			    classList = _props2.classList;
			var url = content.file.url;

			var style = {
				backgroundImage: 'url(\'' + url + '\')'
			};
			var classes = typeof classList !== 'undefined' ? classList : '';
			return _react2.default.createElement('div', { className: 'preview-image ' + classes, style: style });
		}
	}]);

	return FlexibleImageComponent;
}(_react.Component);

exports.default = FlexibleImageComponent;