"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FiltersToggle = function FiltersToggle(_ref) {
	var config = _ref.config,
	    filtersAreVisible = _ref.filtersAreVisible,
	    onToggle = _ref.onToggle;

	return _react2.default.createElement(
		"span",
		{ className: "filters" },
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
			{ className: "link", onClick: onToggle },
			filtersAreVisible ? '-' : config.glyph.content,
			config.name
		),
		_react2.default.createElement(
			"span",
			{ className: filtersAreVisible ? 'ind ind--list' : 'ind ind--list is-hidden' },
			":"
		),
		_react2.default.createElement(
			"span",
			{ className: "ws" },
			"-"
		),
		_react2.default.createElement(
			"span",
			{ className: "separator" },
			'/'
		)
	);
};

exports.default = FiltersToggle;