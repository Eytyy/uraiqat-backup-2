"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Typology = function Typology(_ref) {
	var content = _ref.content;

	return _react2.default.createElement(
		"span",
		{ className: "post-preview__meta__item" },
		content.map(function (_ref2, index) {
			var fields = _ref2.fields,
			    sys = _ref2.sys;

			if (index === content.length - 1) {
				return _react2.default.createElement(
					"span",
					{ key: sys.id },
					fields.title,
					"."
				);
			} else {
				return _react2.default.createElement(
					"span",
					{ key: sys.id },
					fields.title,
					", "
				);
			}
		})
	);
};

var ProjectPreview = function ProjectPreview(content) {
	var projectName = content.projectName,
	    year = content.year,
	    typology = content.typology;

	console.log(content);
	return _react2.default.createElement(
		"article",
		{ className: "project-preview" },
		_react2.default.createElement(
			"header",
			{ className: "project-preview__header" },
			_react2.default.createElement(
				"h2",
				{ className: "project-preview__project-name" },
				projectName
			),
			_react2.default.createElement(
				"div",
				{ className: "post-preview__meta" },
				year && _react2.default.createElement(
					"span",
					{ className: "post-preview__meta__item" },
					year,
					' -> '
				),
				typology.length !== 0 ? _react2.default.createElement(Typology, { content: typology }) : null
			)
		)
	);
};

exports.default = ProjectPreview;