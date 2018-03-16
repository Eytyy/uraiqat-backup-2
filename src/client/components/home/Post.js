import React from 'react';
import PostDefault from './PostDefault';
import PostFeatured from './PostFeatured';

const Post = (content) => {
	const { previewDisplaySize, ...rest } = content;
	return previewDisplaySize === 'Featured' ?
		<PostFeatured {...rest } /> :
		<PostDefault {...rest } />;
};

export default Post;