'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _ImageComponent = require('../ImageComponent');

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

var _Preview = require('../Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostDefault = function PostDefault(content) {
	var title = content.title,
	    category = content.category,
	    date = content.date,
	    previewImagevideo = content.previewImagevideo,
	    previewText = content.previewText,
	    id = content.id;

	if (previewImagevideo) {
		var imgSize = previewImagevideo.fields.file.details.image;
		var orientation = imgSize.width > imgSize.height ? 'landscape' : 'portrait';
		if (orientation === 'portrait') {
			return _react2.default.createElement(
				_Preview2.default,
				{ classList: 'post-preview post-preview--default post-preview--' + orientation },
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ className: 'post-preview__link', to: '/journal/' + id },
					_react2.default.createElement(_ImageComponent2.default, { src: previewImagevideo.fields.file.url, title: previewImagevideo.fields.title }),
					_react2.default.createElement(
						'div',
						{ className: 'post-preview__content' },
						(category || date) && _react2.default.createElement(
							'div',
							{ className: 'post-preview__meta' },
							(0, _helpers.formatDate)(date),
							' -> ',
							category.fields.title
						),
						title && _react2.default.createElement(
							'h2',
							{ className: 'post-preview__title' },
							title
						),
						previewText && _react2.default.createElement(
							'div',
							{ className: 'post-preview__desc' },
							_react2.default.createElement(
								'p',
								null,
								previewText
							)
						)
					)
				)
			);
		} else {
			return _react2.default.createElement(
				_Preview2.default,
				{ classList: 'post-preview post-preview--default post-preview--' + orientation },
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ className: 'post-preview__link', to: '/journal/' + id },
					(category || date) && _react2.default.createElement(
						'div',
						{ className: 'post-preview__meta' },
						(0, _helpers.formatDate)(date),
						' -> ',
						category.fields.title
					),
					_react2.default.createElement(_ImageComponent2.default, { src: previewImagevideo.fields.file.url, title: previewImagevideo.fields.title }),
					title && _react2.default.createElement(
						'h2',
						{ className: 'post-preview__title' },
						title
					),
					previewText && _react2.default.createElement(
						'div',
						{ className: 'post-preview__desc' },
						_react2.default.createElement(
							'p',
							null,
							previewText
						)
					)
				)
			);
		}
	} else {
		return _react2.default.createElement(
			_Preview2.default,
			{ classList: 'post-preview post-preview--default' },
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ className: 'post-preview__link', to: '/journal/' + id },
				(category || date) && _react2.default.createElement(
					'div',
					{ className: 'post-preview__meta' },
					(0, _helpers.formatDate)(date),
					' -> ',
					category.fields.title
				),
				title && _react2.default.createElement(
					'h2',
					{ className: 'post-preview__title' },
					title
				),
				previewText && _react2.default.createElement(
					'div',
					{ className: 'post-preview__desc' },
					_react2.default.createElement(
						'p',
						null,
						previewText
					)
				)
			)
		);
	}
};

exports.default = PostDefault;