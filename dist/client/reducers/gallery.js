'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getActiveSlide = exports.getGalleryContent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

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
	var action = arguments[1];

	switch (action.type) {
		case 'RECIEVE_GALLERY_CONTENT':
			//eslint-disable-line
			var ids = {};
			var slides = action.response.content.map(function (_ref) {
				var sys = _ref.sys,
				    fields = _ref.fields;
				return _extends({}, fields, {
					id: sys.id
				});
			});
			ids[action.response.sliderId] = {
				id: action.response.sliderId,
				slides: slides,
				activeSlide: 0
			};
			return _extends({}, state, ids);
		case 'UPDATE_ACTIVE_SLIDE':
			//eslint-disable-line
			var slider = state[action.response.sliderId];
			var sliderNextSlide = updateSlide(slider.activeSlide, slider.slides.length, action.response.direction);
			var newSliderState = _extends({}, slider, {
				activeSlide: sliderNextSlide
			});
			return _extends({}, state, _defineProperty({}, action.response.sliderId, _extends({}, newSliderState)));
		default:
			return state;
	}
};

var All = function All() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		isActive: false,
		activeGalleryId: null
	};
	var action = arguments[1];

	switch (action.type) {
		case 'UPDATE_GALLERY_VISIBILITY':
			return _extends({}, state, {
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

var getGalleryContent = exports.getGalleryContent = function getGalleryContent(state) {
	console.log(state.ById[state.All.activeGalleryId]);
	return [];
};

var getActiveSlide = exports.getActiveSlide = function getActiveSlide(state, id) {
	return typeof state.ById[id] !== 'undefined' ? state.ById[id].activeSlide : 0;
};

exports.default = gallery;