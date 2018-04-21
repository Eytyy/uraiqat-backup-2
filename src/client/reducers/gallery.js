import { combineReducers } from 'redux';

const updateSlide = (currentSlideIndex, noOfSlides, direction) => {
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

const ById = (state = {
}, action) => {
	switch (action.type) {
	case 'RECIEVE_GALLERY_CONTENT': //eslint-disable-line
		const ids = {};
		const slides = action.response.content.map(({ sys, fields}) => ({
			...fields,
			id: sys.id,
		}));
		ids[action.response.sliderId] = {
			id: action.response.sliderId,
			title: action.response.contentTitle,
			type: action.response.type || 'default',
			slides,
			activeSlide: 0
		};
		return {
			...state,
			...ids
		};
	case 'UPDATE_ACTIVE_SLIDE': //eslint-disable-line
		const slider = state[action.response.sliderId];
		const sliderNextSlide = updateSlide(slider.activeSlide, slider.slides.length, action.response.direction);
		const newSliderState = {
			...slider,
			activeSlide: sliderNextSlide
		};
		return {
			...state,
			[action.response.sliderId]: {...newSliderState}
		};
	default:
		return state;
	}
};

const All = (state = {
	isActive: false,
	activeGalleryId: null,
}, action) => {
	switch (action.type) {
	case 'UPDATE_GALLERY_VISIBILITY':
		return {
			...state,
			activeGalleryId: action.response.sliderId || state.activeGalleryId,
			isActive: action.response.isVisible,
		};
	default:
		return state;
	}
};

const gallery = combineReducers({
	All,
	ById,
});

export const getGalleryContent = (state) => {
	return state.All.activeGalleryId ? {
		galleryId: state.All.activeGalleryId,
		...state.ById[state.All.activeGalleryId],
		isActive: state.All.isActive,
	}: [];
};

export const getActiveSlide = (state, id) =>
	typeof state.ById[id] !== 'undefined' ? state.ById[id].activeSlide : 0;

export default gallery;