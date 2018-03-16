'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _ImageComponent = require('../ImageComponent');

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

var _PostFeaturedText = require('./PostFeaturedText');

var _PostFeaturedText2 = _interopRequireDefault(_PostFeaturedText);

var _Preview = require('../Preview');

var _Preview2 = _interopRequireDefault(_Preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostFeatured = function PostFeatured(content) {
	var previewImagevideo = content.previewImagevideo,
	    id = content.id;

	if (previewImagevideo) {
		var imgSize = previewImagevideo.fields.file.details.image;
		var orientation = imgSize.width > imgSize.height ? 'landscape' : 'portrait';
		return _react2.default.createElement(
			_Preview2.default,
			{ classList: 'post-preview post-preview--featured post-preview--' + orientation },
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ className: 'post-preview__link', to: '/journal/' + id },
				_react2.default.createElement(_ImageComponent2.default, { src: previewImagevideo.fields.file.url, title: previewImagevideo.fields.title }),
				_react2.default.createElement(_PostFeaturedText2.default, content)
			)
		);
	} else {
		return _react2.default.createElement(
			_Preview2.default,
			{ classList: 'post-preview post-preview--featured' },
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ className: 'post-preview__link', to: '/journal/' + id },
				_react2.default.createElement(_PostFeaturedText2.default, content)
			)
		);
	}
};

exports.default = PostFeatured;