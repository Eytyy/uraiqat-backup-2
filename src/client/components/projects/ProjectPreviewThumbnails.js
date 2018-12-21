import React from 'react';
import ImageComponent from '../media/ImageComponent';
import FeaturedMainImage from '../media/FeaturedMainImage';


const ProjectPreviewThumbnails = ({
	previewMainThumbnail,
	previewDrawingThumbnail,
	previewDiagramThumbnail,
	previewCraftThumbnail,
	featured
}) => {
	return (
		<div className="project-preview__thumbs">
			{
				typeof featured !== 'undefined' && featured ?
				<>
					<FeaturedMainImage
						craft = {previewCraftThumbnail} 
						drawing = {previewDrawingThumbnail} 
						diagram = {previewDiagramThumbnail} 
						main = {previewMainThumbnail} 
					/>
				</> :
				<>
					{ previewMainThumbnail && <ImageComponent
						patternId="project-main-thumb"
						imagesQuery={'?fl=progressive&w=475'}
						classList='project-preview__image project-preview__image--main'
						src={previewMainThumbnail.fields.file.url} />
					}
				</>
			}
		</div>
	);
};

export default ProjectPreviewThumbnails;