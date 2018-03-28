import React from 'react';
import VideoComponent from '../media/VideoComponent';

const PostMediaVideo = ({ content, patternId }) => {
	const videoClass = 'post-preview__video';
	return (
		<VideoComponent 
			patternId={patternId}
			classList={videoClass} content={content} 
		/> 
	);
};

export default PostMediaVideo;