import React from 'react';
import YoutubeComponent from '../media/YoutubeComponent';

const PostContentMedia = ({ content }) => {
	if (typeof content === 'undefined') {
		return null;
	}
	return (
		<div className="post__media post__media--video">
			<div className="post__media__video-wrapper">
				<YoutubeComponent classes="post__media__video" autplay={0} videoId={content.youtubeId} />
			</div>
		</div>
	);
	
};

export default PostContentMedia;