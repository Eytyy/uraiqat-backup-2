"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ProjectPreviewThumbnails = _interopRequireDefault(require("./ProjectPreviewThumbnails"));

var _AtelierPreviewThumbnails = _interopRequireDefault(require("./AtelierPreviewThumbnails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = function Category(_ref) {
  var content = _ref.content;
  return _react.default.createElement("span", {
    className: "post-preview__meta__item"
  }, content.map(function (_ref2, index) {
    var fields = _ref2.fields,
        sys = _ref2.sys;

    if (index === content.length - 1) {
      return _react.default.createElement("span", {
        key: sys.id
      }, fields.title || fields.name, ".");
    } else {
      return _react.default.createElement("span", {
        key: sys.id
      }, fields.title || fields.name, ", ");
    }
  }));
};

var CommonProjectPreview = function CommonProjectPreview(props) {
  var id = props.id,
      title = props.title,
      year = props.year,
      category = props.category,
      featured = props.featured,
      type = props.type;
  console.log(category);
  var featuredClass = typeof featured !== 'undefined' && featured ? 'featured' : 'default';
  return _react.default.createElement("article", {
    className: "".concat(type, "-preview ").concat(type, "-preview--").concat(featuredClass)
  }, _react.default.createElement(_reactRouterDom.Link, {
    className: "".concat(type, "-preview__link"),
    to: "/".concat(type === 'project' ? 'work' : 'atelier', "/").concat(id)
  }, type === 'project' ? _react.default.createElement(_ProjectPreviewThumbnails.default, props) : _react.default.createElement(_AtelierPreviewThumbnails.default, props), _react.default.createElement("header", {
    className: "".concat(type, "-preview__header")
  }, _react.default.createElement("h2", {
    className: "".concat(type, "-preview__project-name title")
  }, title), _react.default.createElement("div", {
    className: "post-preview__meta"
  }, year && _react.default.createElement("span", {
    className: "post-preview__meta__item"
  }, year, ' -> '), category && category.length !== 0 ? _react.default.createElement(Category, {
    content: category
  }) : null))));
};

var _default = CommonProjectPreview;
exports.default = _default;