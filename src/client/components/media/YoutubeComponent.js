import React from 'react';
import YouTube from 'react-youtube';

const YoutubeComponent = ({videoId, autoplay = 0, classes = '', controls = 1 }) => {
	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			modestbranding: 1,
			rel: 0,
			showinfo: 0,
			playsinline: 1,
			autoplay,
			controls,
		},
	};
	return (
		<YouTube
			videoId={videoId}
			id={videoId}
			className="video"
			containerClassName={`youtube-video-wrapper ${classes}`}
			opts={opts}
		/>
	);
};

export default YoutubeComponent;