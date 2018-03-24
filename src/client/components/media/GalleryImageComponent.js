import React, { Component } from 'react';

class GalleryImageComponent extends Component {
	render() {
		const { content, active } = this.props;
		const { file, description } = content;
		const isImageLandscape = file.details.image.width > file.details.image.height + 100;
		const style = {
			height: isImageLandscape ? 'auto' :`${window.innerHeight - 64 - 64}px`,
			width: isImageLandscape ? '100%' : 'auto'
		};
		return (
			<div className={`slide gallery__slide gallery__slide--${isImageLandscape ? 'landscape' : 'portrait' }`}>
				<div className="gallery__slide__media">
					<img style={style} src={file.url} />
				</div>
				{ description && <div className="caption">{active + 1}: {description}</div>}
			</div>
		);
	}
}

export default GalleryImageComponent;