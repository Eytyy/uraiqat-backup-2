import React from 'react';
import ImageComponent from '../media/ImageComponent';

const AtelierPreviewThumbnails = ({ previewMainThumbnail, featured }) => {
	if (typeof window === 'undefined') {
		return <div className="atelier-preview__thumbs" />;
	}
	const patternID = window.innerWidth < 768 ? 'atelier-main-thumb--featured' : typeof featured !== 'undefined' && featured ? 'atelier-main-thumb--featured' : 'project-main-thumb'
	return (
		<div className="atelier-preview__thumbs">
			<ImageComponent
				patternId={`${patternID}`}
				imagesQuery={'?fl=progressive&w=756'}
				classList='atelier-preview__image atelier-preview__image--main'
				src={previewMainThumbnail.fields.file.url}
			/>
		</div>
	)
};

export default AtelierPreviewThumbnails;