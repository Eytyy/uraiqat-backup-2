'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Preview = require('./Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _PostMediaImage = require('./home/PostMediaImage');

var _PostMediaImage2 = _interopRequireDefault(_PostMediaImage);

var _PostMediaVideo = require('./home/PostMediaVideo');

var _PostMediaVideo2 = _interopRequireDefault(_PostMediaVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchPreviewProject = function SearchPreviewProject(_ref) {
	var content = _ref.content,
	    type = _ref.type;
	var previewMainThumbnail = content.previewMainThumbnail,
	    id = content.id,
	    year = content.year,
	    title = content.title;
	// determine whether the media content is a video or an image

	var isMediaOfTypeImage = RegExp('image').test(previewMainThumbnail.fields.file.contentType);
	if (!isMediaOfTypeImage) {
		return _react2.default.createElement(
			_Preview2.default,
			{ classList: 'post-preview post-preview--video post-preview--default post-preview--landscape' },
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ className: 'post-preview__link', to: '/' + (type === 'work' ? 'work' : 'atelier') + '/' + id },
				year && type === 'work' && _react2.default.createElement(
					'div',
					{ className: 'post-preview__meta' },
					year,
					' ',
					_react2.default.createElement(
						'span',
						{ className: 'post-preview__meta__title' },
						' -> ',
						'Work'
					)
				),
				type !== 'work' && _react2.default.createElement(
					'div',
					{ className: 'post-preview__meta' },
					'Atelier'
				)
			),
			_react2.default.createElement(_PostMediaVideo2.default, { content: previewMainThumbnail, patternId: 'default-post--video' }),
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ className: 'post-preview__link', to: '/' + (type === 'work' ? 'work' : 'atelier') + '/' + id },
				_react2.default.createElement(
					'div',
					{ className: 'post-preview__content' },
					title && _react2.default.createElement(
						'h2',
						{ className: 'post-preview__title title' },
						title
					)
				)
			)
		);
	} else {
		return _react2.default.createElement(
			_Preview2.default,
			{ classList: 'post-preview post-preview--default post-preview--landscape' },
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ className: 'post-preview__link', to: '/' + (type === 'work' ? 'work' : 'atelier') + '/' + id },
				year && type === 'work' && _react2.default.createElement(
					'div',
					{ className: 'post-preview__meta' },
					year,
					' ',
					_react2.default.createElement(
						'span',
						{ className: 'post-preview__meta__title' },
						' -> ',
						'Work'
					)
				),
				type !== 'work' && _react2.default.createElement(
					'div',
					{ className: 'post-preview__meta' },
					'Atelier'
				),
				_react2.default.createElement(_PostMediaImage2.default, {
					content: previewMainThumbnail,
					query: 'w=1020',
					orientation: 'landscape',
					patternId: 'default-post'
				}),
				title && _react2.default.createElement(
					'h2',
					{ className: 'post-preview__title title' },
					title
				)
			)
		);
	}
};

exports.default = SearchPreviewProject;