'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageComponent = require('../media/ImageComponent');

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AtelierPreviewThumbnails = function AtelierPreviewThumbnails(_ref) {
	var main = _ref.main,
	    diagram = _ref.diagram;

	var orientation = main.fields.file.details.image.width > main.fields.file.details.image.height ? 'landscape' : 'portrait';
	var mainQuery = orientation === 'landscape' ? '?fl=progressive&w=756' : '?fl=progressive&w=420';
	var diagramQuery = orientation === 'landscape' ? '?fl=progressive&h=416' : '?fl=progressive&h=608';

	if (orientation === 'landscape') {
		return _react2.default.createElement(
			'div',
			{ className: 'atelier-preview__thumbs atelier-preview__thumbs--' + orientation },
			main && _react2.default.createElement(_ImageComponent2.default, { patternId: 'atelier-main-thumb', imagesQuery: mainQuery, classList: 'atelier-preview__image atelier-preview__image--main', src: main.fields.file.url }),
			diagram && _react2.default.createElement(_ImageComponent2.default, { patternId: 'atelier-diagram-thumb', imagesQuery: diagramQuery, classList: 'atelier-preview__image atelier-preview__image--diagram', src: diagram.fields.file.url })
		);
	}
	return _react2.default.createElement(
		'div',
		{ className: 'atelier-preview__thumbs atelier-preview__thumbs--' + orientation },
		main && _react2.default.createElement(_ImageComponent2.default, { patternId: 'atelier-main-thumb--portrait', imagesQuery: mainQuery, classList: 'atelier-preview__image atelier-preview__image--main', src: main.fields.file.url }),
		diagram && _react2.default.createElement(_ImageComponent2.default, { patternId: 'atelier-diagram-thumb--portrait', imagesQuery: diagramQuery, classList: 'atelier-preview__image atelier-preview__image--diagram', src: diagram.fields.file.url })
	);
};

exports.default = AtelierPreviewThumbnails;