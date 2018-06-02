'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GalleryImageComponent = function GalleryImageComponent(_ref) {
	var content = _ref.content;
	var file = content.file,
	    description = content.description;

	var isImageLandscape = file.details.image.width > file.details.image.height + 100;
	var imageQuery = isImageLandscape ? 'w=' + window.innerWidth : 'h=' + window.innerHeight;
	return _react2.default.createElement(
		'div',
		{ className: 'slide slide--image gallery__slide gallery__slide--' + (isImageLandscape ? 'landscape' : 'portrait') },
		_react2.default.createElement(
			'div',
			{ className: 'gallery__slide__content' },
			_react2.default.createElement(
				'div',
				{ className: 'gallery__slide__image-wrapper' },
				_react2.default.createElement('img', { src: file.url + '?fl=progressive&' + imageQuery })
			),
			description && _react2.default.createElement(
				'div',
				{ className: 'slide-details' },
				_react2.default.createElement(
					'div',
					{ className: 'slide-details__content' },
					_react2.default.createElement(
						'div',
						{ className: 'slide-details__description' },
						content.description
					)
				)
			)
		)
	);
};

exports.default = GalleryImageComponent;