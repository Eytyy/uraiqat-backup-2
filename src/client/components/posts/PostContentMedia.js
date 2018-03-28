import React from 'react';
import Slider from '../../containers/Slider';
import FlexibleImageComponent from '../media/FlexibleImageComponent';
import VideoComponent from '../media/VideoComponent';

const PostContentMedia = ({ content, id }) => {
	if (typeof content === 'undefined') {
		return null;
	}
	if (content.files.length > 1) {
		return  <Slider
			sliderName="post-slider"
			sliderId={id}
			classList="post__media"
			imagesQuery={'?fl=progressive&w=882'}
			content={content.files}
		/>;
	}
	const singleContent = content.files[0];
	const isMediaOfTypeImage = RegExp('image').test(singleContent.fields.file.contentType);
	
	return isMediaOfTypeImage ?
		<FlexibleImageComponent content={content.files[0]} /> :
		<div className="post__media post__media--video">
			<div className="post__media__video-wrapper">
				<VideoComponent classList="post__media__video" patternId="post-media--video" content={singleContent} />
			</div>
			{ singleContent.fields.description && <div className="post__media__caption">{singleContent.fields.description}</div>}
		</div>;
};

export default PostContentMedia;