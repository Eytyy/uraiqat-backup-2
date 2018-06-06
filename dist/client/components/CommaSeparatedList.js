"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommaSeparatedList = function CommaSeparatedList(_ref) {
	var content = _ref.content;
	return _react2.default.createElement(
		"div",
		{ className: "project__meta__item typology" },
		_react2.default.createElement(
			"span",
			{ className: "label" },
			"Typology: "
		),
		content.map(function (_ref2, index) {
			var sys = _ref2.sys,
			    fields = _ref2.fields;

			if (index === content.length - 1) {
				return _react2.default.createElement(
					"span",
					{ key: sys.id },
					fields.title
				);
			}
			return _react2.default.createElement(
				"span",
				{ key: sys.id },
				fields.title,
				", "
			);
		})
	);
};

exports.default = CommaSeparatedList;