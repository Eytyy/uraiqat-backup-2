
import React from 'react';
import SlideImageComponent from './SlideImageComponent';
import SlideVideoComponent from './SlideVideoComponent';

const Slide = ({ imagesQuery, content, onClick, active }) => {
	const isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ?
		<SlideImageComponent active={active} onClick={onClick} imagesQuery={imagesQuery} content={content} /> :
		<SlideVideoComponent active={active} onClick={onClick} content={content} /> ;
};

export default Slide;