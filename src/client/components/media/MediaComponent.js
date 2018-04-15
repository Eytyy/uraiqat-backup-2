import React from 'react';
import VideoComponent from './VideoComponent';
import ImageComponent from './ImageComponent';

const MediaComponent = ({ media }) => {
	const isMediaOfTypeImage = RegExp('image').test(media.fields.file.contentType);
	if (isMediaOfTypeImage) {
		return <ImageComponent classList="atelier-landing__image" patternId="atelier-landing-media-image"
			src={media.fields.file.url} size={media.fields.file.details.image} />;
	}	else {
		return <VideoComponent classList="atelier-landing__video" patternId="atelier-landing-media-video" content={media} />;
	}
};

export default MediaComponent;