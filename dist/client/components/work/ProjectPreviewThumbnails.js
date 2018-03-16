'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageComponent = require('../ImageComponent');

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectPreviewThumbnails = function ProjectPreviewThumbnails(_ref) {
	var main = _ref.main,
	    craft = _ref.craft,
	    diagram = _ref.diagram,
	    drawing = _ref.drawing;

	return _react2.default.createElement(
		'div',
		{ className: 'project-preview__thumbs' },
		_react2.default.createElement(
			'div',
			{ className: 'project-preview__thumbs__left-col' },
			main && _react2.default.createElement(_ImageComponent2.default, { classList: 'project-preview__image project-preview__image--main', src: main.fields.file.url }),
			drawing && _react2.default.createElement(_ImageComponent2.default, { classList: 'project-preview__image project-preview__image--drawing', src: drawing.fields.file.url })
		),
		_react2.default.createElement(
			'div',
			{ className: 'project-preview__thumbs__right-col' },
			diagram && _react2.default.createElement(_ImageComponent2.default, { classList: 'project-preview__image project-preview__image--diagram', src: diagram.fields.file.url }),
			craft && _react2.default.createElement(_ImageComponent2.default, { classList: 'project-preview__image project-preview__image--craft', src: craft.fields.file.url })
		)
	);
};

exports.default = ProjectPreviewThumbnails;