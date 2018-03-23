import React, { Component } from 'react';

class GalleryImageComponent extends Component {
	render() {
		const { content, active } = this.props;
		const { file, description } = content;
		const isImageLandscape = file.details.image.width > file.details.image.height;
		return (
			<div className={`slide gallery__slide gallery__slide--${isImageLandscape ? 'landscape' : 'portrait' }`}>
				<div className="gallery__slide__media">
					<div className="caption">{active + 1}: {description}</div>
					<img src={file.url} />
				</div>
			</div>
		);
	}
}

export default GalleryImageComponent;