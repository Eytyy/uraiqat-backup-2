'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('../../containers/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContentMedia = function PostContentMedia(_ref) {
	var content = _ref.content;

	if (typeof content === 'undefined') {
		return null;
	}
	return _react2.default.createElement(_Slider2.default, { classList: 'post__media', imagesQuery: '?fl=progressive&w=882&h=575', content: content.files });
};

exports.default = PostContentMedia;