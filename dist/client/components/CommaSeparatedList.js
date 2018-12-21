"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommaSeparatedList = function CommaSeparatedList(_ref) {
  var content = _ref.content;
  return _react.default.createElement("div", {
    className: "project__meta__item typology"
  }, _react.default.createElement("span", {
    className: "label"
  }, "Typology: "), content.map(function (_ref2, index) {
    var sys = _ref2.sys,
        fields = _ref2.fields;

    if (index === content.length - 1) {
      return _react.default.createElement("span", {
        key: sys.id
      }, fields.title);
    }

    return _react.default.createElement("span", {
      key: sys.id
    }, fields.title, ", ");
  }));
};

var _default = CommaSeparatedList;
exports.default = _default;