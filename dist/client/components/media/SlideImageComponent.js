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

var SlideImageComponent = function (_Component) {
	_inherits(SlideImageComponent, _Component);

	function SlideImageComponent() {
		_classCallCheck(this, SlideImageComponent);

		var _this = _possibleConstructorReturn(this, (SlideImageComponent.__proto__ || Object.getPrototypeOf(SlideImageComponent)).call(this));

		_this.state = {
			imageIsLoaded: false
		};
		_this.onSlideClick = _this.onSlideClick.bind(_this);
		_this.isStillMounted = true;
		return _this;
	}

	_createClass(SlideImageComponent, [{
		key: 'onSlideClick',
		value: function onSlideClick() {
			var _props = this.props,
			    onClick = _props.onClick,
			    id = _props.id;

			if (this.state.imageIsLoaded) {
				onClick(id);
			}
		}
	}, {
		key: 'checkImage',
		value: function checkImage() {
			var _props2 = this.props,
			    content = _props2.content,
			    imagesQuery = _props2.imagesQuery;

			return new Promise(function (resolve) {
				var img = new Image();
				var imgSrc = typeof imagesQuery !== 'undefined' ? '' + content.file.url + imagesQuery : content.file.url;
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
			var _props3 = this.props,
			    content = _props3.content,
			    imagesQuery = _props3.imagesQuery,
			    active = _props3.active,
			    sliderName = _props3.sliderName;
			var file = content.file,
			    description = content.description;

			var url = typeof imagesQuery !== 'undefined' ? '' + file.url + imagesQuery : file.url;
			var style = {
				backgroundImage: 'url(\'' + url + '\')'
			};
			return _react2.default.createElement(
				'div',
				{ className: 'slide slide--image', onClick: this.onSlideClick },
				this.state.imageIsLoaded ? _react2.default.createElement('div', { className: 'preview-image slide__image', style: style }) : _react2.default.createElement(_Pattern2.default, { sliderName: sliderName }),
				description && _react2.default.createElement(
					'div',
					{ className: 'caption' },
					active + 1,
					': ',
					description
				)
			);
		}
	}]);

	return SlideImageComponent;
}(_react.Component);

exports.default = SlideImageComponent;