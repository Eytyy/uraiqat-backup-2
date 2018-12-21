"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PostDefault = _interopRequireDefault(require("./home/default/PostDefault"));

var _SearchPreviewProject = _interopRequireDefault(require("./SearchPreviewProject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchPreview = function SearchPreview(_ref) {
  var content = _ref.content,
      type = _ref.type,
      id = _ref.id;

  var contentWid = _objectSpread({}, content, {
    id: id
  });

  return type === 'post' ? _react.default.createElement(_PostDefault.default, {
    content: contentWid
  }) : _react.default.createElement(_SearchPreviewProject.default, {
    type: type,
    content: contentWid
  });
};

var _default = SearchPreview;
exports.default = _default;