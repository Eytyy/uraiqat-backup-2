"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexibleImageComponent = function FlexibleImageComponent(_ref) {
	var content = _ref.content;
	var _content$fields = content.fields,
	    description = _content$fields.description,
	    file = _content$fields.file;

	return _react2.default.createElement(
		"div",
		{ className: "post__media" },
		_react2.default.createElement("img", { src: file.url }),
		description && _react2.default.createElement(
			"div",
			{ className: "post__media__caption" },
			description
		)
	);
};

exports.default = FlexibleImageComponent;