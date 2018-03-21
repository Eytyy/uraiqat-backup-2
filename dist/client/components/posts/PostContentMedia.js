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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContentMedia = function PostContentMedia(_ref) {
	var content = _ref.content;

	if (typeof content === 'undefined') {
		return null;
	}

	return content.files.length > 1 ? _react2.default.createElement(_Slider2.default, { classList: 'post__media', imagesQuery: '?fl=progressive&w=882', content: content.files }) : _react2.default.createElement(
		'div',
		{ className: 'post__media' },
		_react2.default.createElement(_FlexibleImageComponent2.default, { content: content.files[0] })
	);
};

exports.default = PostContentMedia;