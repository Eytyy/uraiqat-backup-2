import React, { Component } from 'react';

import PostFeaturedText from './PostFeaturedText';
import PostFeaturedMedia from './PostFeaturedMedia';

class PostFeatured extends Component {
	constructor() {
		super();
	}
	render() {
		const { content } = this.props;
		const { previewThumbnail, previewThumbnailYoutube } = content;
		return typeof previewThumbnail !== 'undefined' ||  previewThumbnailYoutube !== 'undefined' ?
			<PostFeaturedMedia content={content} /> :
			<PostFeaturedText content={content} />;
	}
}
export default PostFeatured;