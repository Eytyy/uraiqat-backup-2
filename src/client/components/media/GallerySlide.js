
import React from 'react';
import GalleryImageComponent from './GalleryImageComponent';
import GalleryVideoComponent from './GalleryVideoComponent';

const Slide = ({ imagesQuery, content, index, activeSlide }) => {
	const isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ?
		<GalleryImageComponent index={index} classList="slide slide--image" imagesQuery={imagesQuery} content={content} /> :
		<GalleryVideoComponent activeSlide={activeSlide} index={index} classList="slide slide--video" content={content} /> ;
};

export default Slide;