import React, { Component } from 'react';
import ImageComponent from '../media/ImageComponent';

class PostMediaImage extends Component {
	componentDidMount() {
		const { content, updateOrientation } = this.props;
		const imgSize = content.fields.file.details.image;
		const orientation = imgSize.width > imgSize.height ? 'landscape' : 'portrait';
		updateOrientation(orientation);
	}
	
	render() {
		const { content } = this.props;
		const imageClass = 'post-preview__image';
		return <ImageComponent classList={imageClass} src={content.fields.file.url} />;
	}
}

export default PostMediaImage;