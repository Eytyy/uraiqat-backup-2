"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ImageComponent = _interopRequireDefault(require("../media/ImageComponent"));

var _FeaturedMainImage = _interopRequireDefault(require("../media/FeaturedMainImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectPreviewThumbnails = function ProjectPreviewThumbnails(_ref) {
  var previewMainThumbnail = _ref.previewMainThumbnail,
      previewDrawingThumbnail = _ref.previewDrawingThumbnail,
      previewDiagramThumbnail = _ref.previewDiagramThumbnail,
      previewCraftThumbnail = _ref.previewCraftThumbnail,
      featured = _ref.featured;
  return _react.default.createElement("div", {
    className: "project-preview__thumbs"
  }, typeof featured !== 'undefined' && featured ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_FeaturedMainImage.default, {
    craft: previewCraftThumbnail,
    drawing: previewDrawingThumbnail,
    diagram: previewDiagramThumbnail,
    main: previewMainThumbnail
  })) : _react.default.createElement(_react.default.Fragment, null, previewMainThumbnail && _react.default.createElement(_ImageComponent.default, {
    patternId: "project-main-thumb",
    imagesQuery: '?fl=progressive&w=475',
    classList: "project-preview__image project-preview__image--main",
    src: previewMainThumbnail.fields.file.url
  })));
};

var _default = ProjectPreviewThumbnails;
exports.default = _default;