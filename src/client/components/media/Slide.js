
import React from 'react';
import SlideImageComponent from './SlideImageComponent';
import SlideVideoComponent from './SlideVideoComponent';

const Slide = ({ imagesQuery, content, onClick }) => {
	const isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ?
		<SlideImageComponent onClick={onClick} imagesQuery={imagesQuery} content={content} /> :
		<SlideVideoComponent onClick={onClick} content={content} /> ;
};

export default Slide;