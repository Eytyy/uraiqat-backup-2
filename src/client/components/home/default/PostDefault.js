import React from 'react';

import PostDefaultText from './PostDefaultText';
import PostDefaultMedia from './PostDefaultMedia';

const PostDefault = ({ content }) => {
	const { previewThumbnail } = content;
	return typeof previewThumbnail !== 'undefined' ?
		<PostDefaultMedia content={content} /> :
		<PostDefaultText content={content} />;
};

export default PostDefault;