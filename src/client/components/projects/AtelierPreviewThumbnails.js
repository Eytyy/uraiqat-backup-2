import React from 'react';
import ImageComponent from '../media/ImageComponent';

const AtelierPreviewThumbnails = ({ previewMainThumbnail }) => (
	<div className="atelier-preview__thumbs">
		<ImageComponent
			patternId="atelier-main-thumb"
			imagesQuery={'?fl=progressive&w=756'}
			classList='atelier-preview__image atelier-preview__image--main'
			src={previewMainThumbnail.fields.file.url}
		/>
	</div>
);

export default AtelierPreviewThumbnails;