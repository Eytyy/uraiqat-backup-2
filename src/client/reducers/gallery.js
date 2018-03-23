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

const gallery = (state = {
	slides: [],
	activeSlide: 0,
	isActive: false,
}, action) => {
	switch (action.type) {
	case 'UPDATE_GALLERY_VISIBILITY':
		return {
			...state,
			isActive: action.response,
		};
	case 'RECIEVE_GALLERY_CONTENT': //eslint-disable-line
		const slides = action.response.content.map(({ sys, fields}) => ({
			...fields,
			id: sys.id,
		}));
		return {
			...state,
			slides
		};
	case 'UPDATE_ACTIVE_SLIDE': //eslint-disable-line
		const newActiveSlide = updateSlide(state.activeSlide, state.slides.length, action.response);
		return {
			...state,
			activeSlide: newActiveSlide,
		};
	default:
		return state;
	}
};

export const getIsFetching = state => state.All.isFetching;

export const getGalleryContent = state => state;

export const getActiveSlide = state => state.activeSlide;

export default gallery;
