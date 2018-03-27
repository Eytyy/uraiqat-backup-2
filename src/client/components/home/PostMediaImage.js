import React, { Component } from 'react';
import ImageComponent from '../media/ImageComponent';

class PostMediaImage extends Component {
	render() {
		const { content, patternId, orientation } = this.props;
		const imageClass = 'post-preview__image';
		return <ImageComponent
			patternId={`${patternId}--${orientation}`}
			classList={imageClass}
			src={content.fields.file.url}
			size={content.fields.file.details.image}
		/>;
	}
}

export default PostMediaImage;