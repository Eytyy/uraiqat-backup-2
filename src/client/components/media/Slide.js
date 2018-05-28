
import React from 'react';
import SlideImageComponent from './SlideImageComponent';
import SlideVideoComponent from './SlideVideoComponent';

const Slide = ({ imagesQuery, content, onClick, active, index, sliderName }) => {
	const isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ?
		<SlideImageComponent
			sliderName={sliderName}
			active={active}
			onClick={onClick}
			imagesQuery={imagesQuery}
			content={content} /> :
		<SlideVideoComponent
			sliderName={sliderName} 
			index={index} 
			active={active} 
			onClick={onClick} 
			content={content} /> ;
};

export default Slide;