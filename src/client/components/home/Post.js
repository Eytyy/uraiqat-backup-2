import React from 'react';
import PostDefault from './default/PostDefault';
import PostFeatured from './featured/PostFeatured';

const Post = (content) => {
	const { previewDisplaySize } = content;
	return previewDisplaySize === 'Featured' ?
		<PostFeatured content={ content } /> :
		<PostDefault content={ content } />;
};

export default Post;