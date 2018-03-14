"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostFeatured = function PostFeatured(content) {
	var title = content.title,
	    category = content.category,
	    date = content.date,
	    previewImagevideo = content.previewImagevideo,
	    previewText = content.previewText;

	return _react2.default.createElement(
		"article",
		{ className: "post-preview post-preview--featured" },
		_react2.default.createElement("img", { src: previewImagevideo.fields.file.url, alt: previewImagevideo.fields.title }),
		_react2.default.createElement(
			"div",
			{ className: "post-preview__meta" },
			category.fields.title,
			'->',
			date
		),
		_react2.default.createElement(
			"h2",
			{ className: "post-preview__title" },
			title
		),
		previewText && _react2.default.createElement(
			"p",
			null,
			previewText
		)
	);
};

exports.default = PostFeatured;