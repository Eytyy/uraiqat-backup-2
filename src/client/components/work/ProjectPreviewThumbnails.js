import React from 'react';
import ImageComponent from '../media/ImageComponent';

const ProjectPreviewThumbnails = ({ main, craft, diagram, drawing}) => {
	return (
		<div className="project-preview__thumbs">
			<div className="project-preview__thumbs__left-col">
				{ main && <ImageComponent imagesQuery={'?fl=progressive&w=700&h=416'} classList='project-preview__image project-preview__image--main' src={main.fields.file.url} />}
				{ drawing && <ImageComponent imagesQuery={'?fl=progressive&w=322&h=416'} classList='project-preview__image project-preview__image--drawing' src={drawing.fields.file.url} />}
			</div>
			<div className="project-preview__thumbs__right-col">
				{ diagram && <ImageComponent imagesQuery={'?fl=progressive&w=322&h=208'} classList='project-preview__image project-preview__image--diagram' src={diagram.fields.file.url} />}
				{ craft && <ImageComponent imagesQuery={'?fl=progressive&w=322&h=208'} classList='project-preview__image project-preview__image--craft' src={craft.fields.file.url} />}
			</div>
		</div>
	);
};

export default ProjectPreviewThumbnails;