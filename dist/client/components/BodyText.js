'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BodyText = function BodyText(_ref) {
	var content = _ref.content;

	var FormattedHtml = function FormattedHtml() {
		return { __html: (0, _marked2.default)(content) };
	};
	return _react2.default.createElement('div', { className: 'field-body', dangerouslySetInnerHTML: FormattedHtml() });
};

exports.default = BodyText;