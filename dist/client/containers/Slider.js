'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageComponent = require('../components/media/ImageComponent');

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

var _VideoComponent = require('../components/media/VideoComponent');

var _VideoComponent2 = _interopRequireDefault(_VideoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slide = function Slide(_ref) {
	var imagesQuery = _ref.imagesQuery,
	    content = _ref.content;

	var isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ? _react2.default.createElement(_ImageComponent2.default, { classList: 'slide slide--image', imagesQuery: imagesQuery, src: typeof content.fields !== 'undefined' ? content.fields.file.url : content.file.url }) : _react2.default.createElement(_VideoComponent2.default, { classList: 'slide slide--video', content: content });
};

var Slider = function (_Component) {
	_inherits(Slider, _Component);

	function Slider() {
		_classCallCheck(this, Slider);

		var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this));

		_this.state = {
			activeSlide: 0
		};
		return _this;
	}

	_createClass(Slider, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    content = _props.content,
			    classList = _props.classList,
			    imagesQuery = _props.imagesQuery;

			if (content.length === 0) {
				return null;
			}
			return _react2.default.createElement(
				'div',
				{ className: 'slider ' + classList + ' ' + (content.length === 1 ? '' : 'slider--interactive') },
				_react2.default.createElement(
					'div',
					{ className: 'slider__slides' },
					content.map(function (_ref2) {
						var fields = _ref2.fields,
						    sys = _ref2.sys;
						return _react2.default.createElement(Slide, { key: sys.id, imagesQuery: imagesQuery, content: fields });
					})
				),
				content.length === 1 ? null : _react2.default.createElement(
					'div',
					{ className: 'slider__controls' },
					_react2.default.createElement(
						'div',
						{ className: 'slider__controls__item slider-btn slider-btn--prev' },
						'<'
					),
					_react2.default.createElement(
						'div',
						{ className: 'slider__controls__item slider__counter' },
						this.state.activeSlide,
						'/',
						content.length
					),
					_react2.default.createElement(
						'div',
						{ className: 'slider__controls__item slider-btn slider-btn--next' },
						'>'
					)
				)
			);
		}
	}]);

	return Slider;
}(_react.Component);

Slider.defaultProps = {
	isFlexible: false
};

exports.default = Slider;