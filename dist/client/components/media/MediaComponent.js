'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VideoComponent = require('./VideoComponent');

var _VideoComponent2 = _interopRequireDefault(_VideoComponent);

var _ImageComponent = require('./ImageComponent');

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaComponent = function MediaComponent(_ref) {
	var media = _ref.media;

	var isMediaOfTypeImage = RegExp('image').test(media.fields.file.contentType);
	if (isMediaOfTypeImage) {
		return _react2.default.createElement(_ImageComponent2.default, { classList: 'atelier-landing__image', patternId: 'atelier-landing-media-image',
			src: media.fields.file.url, size: media.fields.file.details.image });
	} else {
		return _react2.default.createElement(_VideoComponent2.default, { classList: 'atelier-landing__video', patternId: 'atelier-landing-media-video', content: media });
	}
};

exports.default = MediaComponent;