import React from 'react';
import VideoComponent from '../media/VideoComponent';

const PostMediaVideo = ({ content }) => {
	const videoClass = 'post-preview__video';
	return (
		<VideoComponent classList={videoClass} content={content} /> 
	);
};

export default PostMediaVideo;