import React from 'react';
import Slider from '../../containers/Slider';
import FlexibleImageComponent from '../media/FlexibleImageComponent';

const PostContentMedia = ({ content, id }) => {
	if (typeof content === 'undefined') {
		return null;
	}
	
	return content.files.length > 1 ?
		<Slider sliderId={id} classList="post__media" imagesQuery={'?fl=progressive&w=882'} content={content.files} />:
		<FlexibleImageComponent content={content.files[0]} />;
};

export default PostContentMedia;