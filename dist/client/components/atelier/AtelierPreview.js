'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _AtelierPreviewThumbnails = require('./AtelierPreviewThumbnails');

var _AtelierPreviewThumbnails2 = _interopRequireDefault(_AtelierPreviewThumbnails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AtelierPreview = function AtelierPreview(content) {
	var id = content.id,
	    title = content.title,
	    previewMainThumbnail = content.previewMainThumbnail,
	    previewCrafttechdiagramThumbnail = content.previewCrafttechdiagramThumbnail;

	return _react2.default.createElement(
		'article',
		{ className: 'atelier-preview' },
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ className: 'atelier-preview__link', to: '/work/' + id },
			_react2.default.createElement(
				'header',
				{ className: 'atelier-preview__header' },
				_react2.default.createElement(
					'h2',
					{ className: 'atelier-preview__project-name title' },
					title
				)
			),
			_react2.default.createElement(_AtelierPreviewThumbnails2.default, { main: previewMainThumbnail, diagram: previewCrafttechdiagramThumbnail })
		)
	);
};

exports.default = AtelierPreview;