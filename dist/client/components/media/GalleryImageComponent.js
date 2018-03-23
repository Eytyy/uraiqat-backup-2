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

var GalleryImageComponent = function (_Component) {
	_inherits(GalleryImageComponent, _Component);

	function GalleryImageComponent() {
		_classCallCheck(this, GalleryImageComponent);

		return _possibleConstructorReturn(this, (GalleryImageComponent.__proto__ || Object.getPrototypeOf(GalleryImageComponent)).apply(this, arguments));
	}

	_createClass(GalleryImageComponent, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    content = _props.content,
			    active = _props.active;
			var file = content.file,
			    description = content.description;

			var isImageLandscape = file.details.image.width > file.details.image.height + 100;
			var style = {
				height: isImageLandscape ? 'auto' : window.innerHeight - 64 - 64 + 'px',
				width: isImageLandscape ? '100%' : 'auto'
			};
			return _react2.default.createElement(
				'div',
				{ className: 'slide gallery__slide gallery__slide--' + (isImageLandscape ? 'landscape' : 'portrait') },
				_react2.default.createElement(
					'div',
					{ className: 'gallery__slide__media' },
					_react2.default.createElement('img', { style: style, src: file.url }),
					_react2.default.createElement(
						'div',
						{ className: 'caption' },
						active + 1,
						': ',
						description
					)
				)
			);
		}
	}]);

	return GalleryImageComponent;
}(_react.Component);

exports.default = GalleryImageComponent;