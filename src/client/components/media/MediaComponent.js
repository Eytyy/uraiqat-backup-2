import React from 'react';
import VideoComponent from './VideoComponent';
import ImageComponent from './ImageComponent';

const MediaComponent = ({ media }) => {
	const isMediaOfTypeImage = RegExp('image').test(media.fields.file.contentType);
	console.log(media);
	if (isMediaOfTypeImage) {
		const style = {
			backgroundImage: `url('${media.fields.file.url}')`,
		};
		return  <div className="atelier-landing__image" style={style}></div>;
	}	else {
		return <VideoComponent classList="atelier-landing__video" patternId="atelier-landing-media-video" content={media} />;
	}
};

export default MediaComponent;