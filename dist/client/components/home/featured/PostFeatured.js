'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostFeaturedText = require('./PostFeaturedText');

var _PostFeaturedText2 = _interopRequireDefault(_PostFeaturedText);

var _PostFeaturedMedia = require('./PostFeaturedMedia');

var _PostFeaturedMedia2 = _interopRequireDefault(_PostFeaturedMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostFeatured = function (_Component) {
	_inherits(PostFeatured, _Component);

	function PostFeatured() {
		_classCallCheck(this, PostFeatured);

		return _possibleConstructorReturn(this, (PostFeatured.__proto__ || Object.getPrototypeOf(PostFeatured)).call(this));
	}

	_createClass(PostFeatured, [{
		key: 'render',
		value: function render() {
			var content = this.props.content;
			var previewThumbnail = content.previewThumbnail;

			return typeof previewThumbnail !== 'undefined' ? _react2.default.createElement(_PostFeaturedMedia2.default, { content: content }) : _react2.default.createElement(_PostFeaturedText2.default, { content: content });
		}
	}]);

	return PostFeatured;
}(_react.Component);

exports.default = PostFeatured;