"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandingFeatured = function LandingFeatured(_ref) {
	var content = _ref.content;

	if (!content) {
		return null;
	}
	return _react2.default.createElement(
		"section",
		{ className: "landing-section landing-section--main" },
		"Landing featured content"
	);
};

exports.default = LandingFeatured;