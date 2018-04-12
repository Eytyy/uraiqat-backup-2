import React from 'react';
import ImageComponent from '../media/ImageComponent';

const AtelierPreviewThumbnails = ({ main, diagram}) => {
	const orientation = main.fields.file.details.image.width > main.fields.file.details.image.height ? 'landscape' : 'portrait';
	const mainQuery = orientation === 'landscape' ? '?fl=progressive&w=756' : '?fl=progressive&w=420';
	const diagramQuery = orientation === 'landscape' ? '?fl=progressive&h=416' : '?fl=progressive&h=608';
	
	if (orientation === 'landscape') {
		return (
			<div className={`atelier-preview__thumbs atelier-preview__thumbs--${orientation}`}>
				{ main && <ImageComponent patternId="atelier-main-thumb" imagesQuery={mainQuery} classList='atelier-preview__image atelier-preview__image--main' src={main.fields.file.url} />}
				{ diagram && <ImageComponent patternId="atelier-diagram-thumb" imagesQuery={diagramQuery} classList='atelier-preview__image atelier-preview__image--diagram' src={diagram.fields.file.url} />}
			</div>
		);
	}
	return (
		<div className={`atelier-preview__thumbs atelier-preview__thumbs--${orientation}`}>
			{ main && <ImageComponent patternId="atelier-main-thumb--portrait" imagesQuery={mainQuery} classList='atelier-preview__image atelier-preview__image--main' src={main.fields.file.url} />}
			{ diagram && <ImageComponent patternId="atelier-diagram-thumb--portrait" imagesQuery={diagramQuery} classList='atelier-preview__image atelier-preview__image--diagram' src={diagram.fields.file.url} />}
		</div>
	);
};

export default AtelierPreviewThumbnails;