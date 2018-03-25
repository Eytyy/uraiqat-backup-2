'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GalleryImageComponent = function GalleryImageComponent(_ref) {
	var content = _ref.content,
	    active = _ref.active;
	var file = content.file,
	    description = content.description;

	var isImageLandscape = file.details.image.width > file.details.image.height + 100;
	var style = {
		height: isImageLandscape ? 'auto' : window.innerHeight - 64 - 64 + 'px',
		width: isImageLandscape ? '100%' : 'auto'
	};
	return _react2.default.createElement(
		'div',
		{ className: 'slide slide--image gallery__slide gallery__slide--' + (isImageLandscape ? 'landscape' : 'portrait') },
		_react2.default.createElement(
			'div',
			{ className: 'gallery__slide__media' },
			_react2.default.createElement('img', { style: style, src: file.url + '?fl=progressive&w=1344' })
		),
		description && _react2.default.createElement(
			'div',
			{ className: 'caption' },
			active + 1,
			': ',
			description
		)
	);
};

exports.default = GalleryImageComponent;