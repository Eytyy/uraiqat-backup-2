'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('../../containers/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _FlexibleImageComponent = require('../media/FlexibleImageComponent');

var _FlexibleImageComponent2 = _interopRequireDefault(_FlexibleImageComponent);

var _VideoComponent = require('../media/VideoComponent');

var _VideoComponent2 = _interopRequireDefault(_VideoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContentMedia = function PostContentMedia(_ref) {
	var content = _ref.content,
	    id = _ref.id;

	if (typeof content === 'undefined') {
		return null;
	}
	if (content.files.length > 1) {
		return _react2.default.createElement(_Slider2.default, {
			sliderName: 'post-slider',
			sliderId: id,
			classList: 'post__media',
			imagesQuery: '?fl=progressive&w=882',
			content: content.files
		});
	}
	var singleContent = content.files[0];
	var isMediaOfTypeImage = RegExp('image').test(singleContent.fields.file.contentType);

	return isMediaOfTypeImage ? _react2.default.createElement(_FlexibleImageComponent2.default, { content: content.files[0] }) : _react2.default.createElement(
		'div',
		{ className: 'post__media post__media--video' },
		_react2.default.createElement(
			'div',
			{ className: 'post__media__video-wrapper' },
			_react2.default.createElement(_VideoComponent2.default, { classList: 'post__media__video', patternId: 'post-media--video', content: singleContent })
		),
		singleContent.fields.description && _react2.default.createElement(
			'div',
			{ className: 'post__media__caption' },
			singleContent.fields.description
		)
	);
};

exports.default = PostContentMedia;