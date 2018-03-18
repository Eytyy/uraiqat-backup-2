"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostTags = function PostTags(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		"div",
		{ className: "post__meta post__categories" },
		_react2.default.createElement(
			"span",
			{ className: "label" },
			"In "
		),
		_react2.default.createElement(
			"div",
			{ className: "post__categories__list post__meta__item" },
			content.map(function (tag, index) {
				return _react2.default.createElement(
					"span",
					{ key: "tag-" + index, className: "post__categories__list__item" },
					tag,
					index === content.length - 1 ? '.' : ', '
				);
			})
		)
	);
};

exports.default = PostTags;