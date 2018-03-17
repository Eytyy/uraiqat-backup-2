import React, { Component } from 'react';

import PostDefaultText from './PostDefaultText';
import PostDefaultMedia from './PostDefaultMedia';

class PostDefault extends Component {
	render() {
		const { content } = this.props;
		const { previewThumbnail } = content;
		return typeof previewThumbnail !== 'undefined' ?
			<PostDefaultMedia content={content} /> :
			<PostDefaultText content={content} />;
	}
}

export default PostDefault;