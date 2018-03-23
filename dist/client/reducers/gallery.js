'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var gallery = function gallery() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		slides: [],
		activeSlide: 0,
		isActive: false
	};
	var action = arguments[1];

	switch (action.type) {
		case 'UPDATE_GALLERY_VISIBILITY':
			return _extends({}, state, {
				isActive: action.response
			});
		case 'RECIEVE_GALLERY_CONTENT':
			//eslint-disable-line
			var slides = action.response.content.map(function (_ref) {
				var sys = _ref.sys,
				    fields = _ref.fields;
				return _extends({}, fields, {
					id: sys.id
				});
			});
			return _extends({}, state, {
				slides: slides
			});
		case 'UPDATE_ACTIVE_SLIDE':
			//eslint-disable-line
			var newActiveSlide = updateSlide(state.activeSlide, state.slides.length, action.response);
			return _extends({}, state, {
				activeSlide: newActiveSlide
			});
		default:
			return state;
	}
};

var getIsFetching = exports.getIsFetching = function getIsFetching(state) {
	return state.All.isFetching;
};

var getGalleryContent = exports.getGalleryContent = function getGalleryContent(state) {
	return state;
};

var getActiveSlide = exports.getActiveSlide = function getActiveSlide(state) {
	return state.activeSlide;
};

exports.default = gallery;