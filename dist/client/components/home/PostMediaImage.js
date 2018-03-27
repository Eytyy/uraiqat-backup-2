'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageComponent = require('../media/ImageComponent');

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostMediaImage = function (_Component) {
	_inherits(PostMediaImage, _Component);

	function PostMediaImage() {
		_classCallCheck(this, PostMediaImage);

		return _possibleConstructorReturn(this, (PostMediaImage.__proto__ || Object.getPrototypeOf(PostMediaImage)).apply(this, arguments));
	}

	_createClass(PostMediaImage, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    content = _props.content,
			    patternId = _props.patternId,
			    orientation = _props.orientation;

			var imageClass = 'post-preview__image';
			return _react2.default.createElement(_ImageComponent2.default, {
				patternId: patternId + '--' + orientation,
				classList: imageClass,
				src: content.fields.file.url,
				size: content.fields.file.details.image
			});
		}
	}]);

	return PostMediaImage;
}(_react.Component);

exports.default = PostMediaImage;