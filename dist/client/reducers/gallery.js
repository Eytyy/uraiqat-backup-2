"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getActiveSlide = exports.getGalleryContent = void 0;

var _redux = require("redux");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateSlide = function updateSlide(currentSlideIndex, noOfSlides, direction) {
  if (direction === 'next') {
    if (currentSlideIndex === noOfSlides - 1) {
      return 0;
    }

    return currentSlideIndex + 1;
  }

  if (currentSlideIndex === 0) {
    return noOfSlides - 1;
  }

  return currentSlideIndex - 1;
};

var ById = function ById() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'RECIEVE_GALLERY_CONTENT':
      //eslint-disable-line
      var ids = {};
      var slides = action.response.content.map(function (_ref) {
        var sys = _ref.sys,
            fields = _ref.fields;
        return _objectSpread({}, fields, {
          id: sys.id
        });
      });
      ids[action.response.sliderId] = {
        id: action.response.sliderId,
        title: action.response.contentTitle,
        type: action.response.type || 'default',
        slides: slides,
        activeSlide: 0
      };
      return _objectSpread({}, state, ids);

    case 'UPDATE_ACTIVE_SLIDE':
      //eslint-disable-line
      var slider = state[action.response.sliderId];
      var sliderNextSlide = updateSlide(slider.activeSlide, slider.slides.length, action.response.direction);

      var newSliderState = _objectSpread({}, slider, {
        activeSlide: sliderNextSlide
      });

      return _objectSpread({}, state, _defineProperty({}, action.response.sliderId, _objectSpread({}, newSliderState)));

    default:
      return state;
  }
};

var All = function All() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isActive: false,
    activeGalleryId: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPDATE_GALLERY_VISIBILITY':
      return _objectSpread({}, state, {
        activeGalleryId: action.response.sliderId || state.activeGalleryId,
        isActive: action.response.isVisible
      });

    default:
      return state;
  }
};

var gallery = (0, _redux.combineReducers)({
  All: All,
  ById: ById
});

var getGalleryContent = function getGalleryContent(state) {
  return state.All.activeGalleryId ? _objectSpread({
    galleryId: state.All.activeGalleryId
  }, state.ById[state.All.activeGalleryId], {
    isActive: state.All.isActive
  }) : [];
};

exports.getGalleryContent = getGalleryContent;

var getActiveSlide = function getActiveSlide(state, id) {
  return typeof state.ById[id] !== 'undefined' ? state.ById[id].activeSlide : 0;
};

exports.getActiveSlide = getActiveSlide;
var _default = gallery;
exports.default = _default;