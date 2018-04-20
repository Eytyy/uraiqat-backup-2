import React from 'react';
import ImageComponent from '../media/ImageComponent';

const AtelierPreviewThumbnails = ({ main}) => {
	const orientation = main.fields.file.details.image.width > main.fields.file.details.image.height ? 'landscape' : 'portrait';
	const mainQuery = orientation === 'landscape' ? '?fl=progressive&w=756' : '?fl=progressive&w=420';
	
	if (orientation === 'landscape') {
		return (
			<div className={`atelier-preview__thumbs atelier-preview__thumbs--${orientation}`}>
				{ main && <ImageComponent patternId="atelier-main-thumb" imagesQuery={mainQuery} classList='atelier-preview__image atelier-preview__image--main' src={main.fields.file.url} />}
			</div>
		);
	}
	return (
		<div className={`atelier-preview__thumbs atelier-preview__thumbs--${orientation}`}>
			{ main && <ImageComponent patternId="atelier-main-thumb--portrait" imagesQuery={mainQuery} classList='atelier-preview__image atelier-preview__image--main' src={main.fields.file.url} />}
		</div>
	);
};

export default AtelierPreviewThumbnails;