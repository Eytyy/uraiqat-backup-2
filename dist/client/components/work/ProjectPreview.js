'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _ProjectPreviewThumbnails = require('./ProjectPreviewThumbnails');

var _ProjectPreviewThumbnails2 = _interopRequireDefault(_ProjectPreviewThumbnails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Typology = function Typology(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		'span',
		{ className: 'post-preview__meta__item' },
		content.map(function (_ref2, index) {
			var fields = _ref2.fields,
			    sys = _ref2.sys;

			if (index === content.length - 1) {
				return _react2.default.createElement(
					'span',
					{ key: sys.id },
					fields.title,
					'.'
				);
			} else {
				return _react2.default.createElement(
					'span',
					{ key: sys.id },
					fields.title,
					', '
				);
			}
		})
	);
};

var ProjectPreview = function ProjectPreview(content) {
	var id = content.id,
	    projectName = content.projectName,
	    year = content.year,
	    typology = content.typology,
	    previewMainThumbnail = content.previewMainThumbnail,
	    previewDrawingThumbnail = content.previewDrawingThumbnail,
	    previewDiagramThumbnail = content.previewDiagramThumbnail,
	    previewCraftThumbnail = content.previewCraftThumbnail;

	return _react2.default.createElement(
		'article',
		{ className: 'project-preview' },
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ className: 'project-preview__link', to: '/work/' + id },
			_react2.default.createElement(
				'header',
				{ className: 'project-preview__header' },
				_react2.default.createElement(
					'h2',
					{ className: 'project-preview__project-name title' },
					projectName
				),
				_react2.default.createElement(
					'div',
					{ className: 'post-preview__meta' },
					year && _react2.default.createElement(
						'span',
						{ className: 'post-preview__meta__item' },
						year,
						' -> '
					),
					typology.length !== 0 ? _react2.default.createElement(Typology, { content: typology }) : null
				)
			),
			_react2.default.createElement(_ProjectPreviewThumbnails2.default, { main: previewMainThumbnail, drawing: previewDrawingThumbnail, diagram: previewDiagramThumbnail, craft: previewCraftThumbnail })
		)
	);
};

exports.default = ProjectPreview;