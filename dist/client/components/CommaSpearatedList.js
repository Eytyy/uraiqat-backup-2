"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommaSpearatedList = function CommaSpearatedList(_ref) {
	var content = _ref.content;

	return content.map(function (_ref2) {
		var sys = _ref2.sys,
		    fields = _ref2.fields;
		return _react2.default.createElement(
			"span",
			{ key: sys.id },
			_react2.default.createElement(
				"span",
				{ className: "label" },
				"Typology: "
			),
			_react2.default.createElement(
				"span",
				null,
				fields.title
			)
		);
	});
};

exports.default = CommaSpearatedList;