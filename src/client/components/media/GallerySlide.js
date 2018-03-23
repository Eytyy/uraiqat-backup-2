
import React from 'react';
import GalleryImageComponent from './GalleryImageComponent';
import GalleryVideoComponent from './GalleryVideoComponent';

const Slide = ({ imagesQuery, content, active }) => {
	const isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ?
		<GalleryImageComponent active={active} classList="slide slide--image" imagesQuery={imagesQuery} content={content} /> :
		<GalleryVideoComponent active={active} classList="slide slide--video" content={content} /> ;
};

export default Slide;