import React from 'react';

const GalleryImageComponent = ({ content, title }) => {
	const { file, description } = content;
	const isImageLandscape = file.details.image.width > file.details.image.height + 100;
	return (
		<div className={`slide slide--image gallery__slide gallery__slide--${isImageLandscape ? 'landscape' : 'portrait' }`}>
			<div className="gallery__slide__content">
				<div className="gallery__slide__image-wrapper">
					<img src={`${file.url}?fl=progressive&w=1344`} />
				</div>
				{ description && 
					<div className="slide-details">
						<div className="slide-details__content">
							<div className="slide-details__description">{ content.description }</div>
						</div>
					</div>
				}
			</div>
		</div>
	);
};

export default GalleryImageComponent;