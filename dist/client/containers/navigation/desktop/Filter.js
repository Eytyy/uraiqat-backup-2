"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = function Filter(_ref) {
	var content = _ref.content,
	    active = _ref.active,
	    onFilterClick = _ref.onFilterClick,
	    id = _ref.id;

	var onClick = function onClick() {
		onFilterClick(id);
	};
	return _react2.default.createElement(
		"span",
		{ onClick: onClick, className: "filter link" },
		active && _react2.default.createElement(
			"span",
			{ className: "filterBox" },
			"[",
			_react2.default.createElement(
				"span",
				{ className: "filterBox__state" },
				"x"
			),
			"]"
		) || _react2.default.createElement(
			"span",
			{ className: "filterBox" },
			"[",
			_react2.default.createElement(
				"span",
				{ className: "filterBox__state" },
				" "
			),
			"]"
		),
		_react2.default.createElement(
			"span",
			{ className: "ws" },
			"-"
		),
		_react2.default.createElement(
			"span",
			null,
			content
		),
		_react2.default.createElement(
			"span",
			{ className: "ws" },
			"-"
		),
		_react2.default.createElement(
			"span",
			{ className: "ws" },
			"-"
		),
		_react2.default.createElement(
			"span",
			{ className: "ws" },
			"-"
		)
	);
};

exports.default = Filter;