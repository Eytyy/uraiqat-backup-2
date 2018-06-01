
import React from 'react';
import GalleryImageComponent from './GalleryImageComponent';
import GalleryVideoComponent from './GalleryVideoComponent';

const GallerySlide = ({ imagesQuery, content, index, activeSlide, title }) => {
	const isMediaOfTypeImage = RegExp('image').test(content.file.contentType);
	return isMediaOfTypeImage ?
		<GalleryImageComponent
			title={title}
			index={index}
			classList="slide slide--image"
			imagesQuery={imagesQuery} content={content}
		/> :
		<GalleryVideoComponent
			title={title}
			activeSlide={activeSlide}
			index={index}
			classList="slide slide--video" content={content}
		/> ;
};

export default GallerySlide;