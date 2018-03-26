
import React from 'react';
import GalleryImageComponent from './GalleryImageComponent';
import GalleryVideoComponent from './GalleryVideoComponent';

const Slide = ({ imagesQuery, content, index }) => {
	const isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ?
		<GalleryImageComponent index={index} classList="slide slide--image" imagesQuery={imagesQuery} content={content} /> :
		<GalleryVideoComponent index={index} classList="slide slide--video" content={content} /> ;
};

export default Slide;