import React, { Component } from 'react';
import ImageComponent from '../media/ImageComponent';

class PostMediaImage extends Component {
	render() {
		const { content, patternId, orientation, query } = this.props;
		const imageClass = 'post-preview__image';
		const imgSrc = query ? `${content.fields.file.url}?${query}` : content.fields.file.url;
		return <ImageComponent
			patternId={`${patternId}--${orientation}`}
			classList={imageClass}
			src={imgSrc}
			size={content.fields.file.details.image}
		/>;
	}
}

export default PostMediaImage;