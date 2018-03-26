import React from 'react';

const GalleryImageComponent = ({ content, index }) => {
	const { file, description } = content;
	const isImageLandscape = file.details.image.width > file.details.image.height + 100;
	const style = {
		height: isImageLandscape ? 'auto' :`${window.innerHeight - 64 - 64}px`,
		width: isImageLandscape ? '100%' : 'auto'
	};
	return (
		<div className={`slide slide--image gallery__slide gallery__slide--${isImageLandscape ? 'landscape' : 'portrait' }`}>
			<div className="gallery__slide__content">
				<div className="gallery__slide__image-wrapper">
					<img style={style} src={`${file.url}?fl=progressive&w=1344`} />
				</div>
				{ description && <div className="caption">{index + 1}: {description}</div>}
			</div>
		</div>
	);
};

export default GalleryImageComponent;