'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pattern = require('../patterns/Pattern');

var _Pattern2 = _interopRequireDefault(_Pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageComponent = function (_Component) {
	_inherits(ImageComponent, _Component);

	function ImageComponent() {
		_classCallCheck(this, ImageComponent);

		var _this = _possibleConstructorReturn(this, (ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).call(this));

		_this.state = {
			imageIsLoaded: false
		};
		_this.isStillMounted = true;
		return _this;
	}

	_createClass(ImageComponent, [{
		key: 'checkImage',
		value: function checkImage() {
			var _props = this.props,
			    src = _props.src,
			    imagesQuery = _props.imagesQuery;

			var url = typeof imagesQuery !== 'undefined' ? '' + src + imagesQuery : src;
			return new Promise(function (resolve) {
				var img = new Image();
				var imgSrc = url;
				img.onload = function () {
					return resolve({ imgSrc: imgSrc, status: 'ok' });
				};
				img.onerror = function () {
					return resolve({ imgSrc: imgSrc, status: 'error' });
				};
				img.src = imgSrc;
			});
		}
	}, {
		key: 'loadImage',
		value: function loadImage() {
			var _this2 = this;

			this.checkImage().then(function () {
				if (_this2.isStillMounted) {
					_this2.setState({
						imageIsLoaded: true
					});
				}
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.loadImage();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.isStillMounted = false;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    src = _props2.src,
			    classList = _props2.classList,
			    imagesQuery = _props2.imagesQuery,
			    patternId = _props2.patternId;

			var url = typeof imagesQuery !== 'undefined' ? '' + src + imagesQuery : src;
			var style = {
				backgroundImage: 'url(\'' + url + '\')'
			};
			var classes = typeof classList !== 'undefined' ? classList : '';
			return _react2.default.createElement(
				'div',
				{ className: '' + classes },
				_react2.default.createElement('div', { className: '' + (this.state.imageIsLoaded ? 'preview-image' : 'preview-image--loading'), style: style }),
				_react2.default.createElement(
					'div',
					{ className: 'preview-pattern ' + classes + ' ' + (this.state.imageIsLoaded ? 'preview-pattern--hidden' : '') },
					_react2.default.createElement(_Pattern2.default, { sliderName: patternId })
				)
			);
		}
	}]);

	return ImageComponent;
}(_react.Component);

exports.default = ImageComponent;