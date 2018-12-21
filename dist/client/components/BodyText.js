"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BodyText = function BodyText(_ref) {
  var content = _ref.content;

  var FormattedHtml = function FormattedHtml() {
    return {
      __html: (0, _marked.default)(content)
    };
  };

  return _react.default.createElement("div", {
    className: "field-body",
    dangerouslySetInnerHTML: FormattedHtml()
  });
};

var _default = BodyText;
exports.default = _default;