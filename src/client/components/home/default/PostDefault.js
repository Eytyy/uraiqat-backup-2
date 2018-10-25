import React from 'react';

import PostDefaultText from './PostDefaultText';
import PostDefaultMedia from './PostDefaultMedia';

const PostDefault = ({ content }) => {
	const { previewThumbnail, previewThumbnailYoutube } = content;
	return typeof previewThumbnail !== 'undefined' ||  previewThumbnailYoutube !== 'undefined' ?
		<PostDefaultMedia content={content} /> :
		<PostDefaultText content={content} />;
};

export default PostDefault;