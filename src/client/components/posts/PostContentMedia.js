import React from 'react';
import Slider from '../../containers/Slider';

const PostContentMedia = ({ content }) => {
	if (typeof content === 'undefined') {
		return null;
	}
	return <Slider classList="post__media" imagesQuery={'?fl=progressive&w=882&h=575'} content={content.files} />;
};

export default PostContentMedia;