import React from 'react';
import ImageComponent from '../media/ImageComponent';

const ProjectPreviewThumbnails = ({ main, craft, diagram, drawing}) => {
	const orientation = drawing.fields.file.details.image.width > drawing.fields.file.details.image.height ? 'landscape' : 'portrait';
	const drawingQuery = orientation === 'landscape' ? '?fl=progressive&w=644&h=208' : '?fl=progressive&w=322&h=416';
	if (orientation === 'landscape') {
		return (
			<div className={`project-preview__thumbs project-preview__thumbs--${orientation}`}>
				<div className="project-preview__thumbs__left-col">
					{ main && <ImageComponent imagesQuery={drawingQuery} classList='project-preview__image project-preview__image--main' src={main.fields.file.url} />}
				</div>
				<div className="project-preview__thumbs__right-col">
					{ drawing && <ImageComponent imagesQuery={'?fl=progressive&w=322&h=416'} classList='project-preview__image project-preview__image--drawing' src={drawing.fields.file.url} />}
					{ diagram && <ImageComponent imagesQuery={'?fl=progressive&w=322&h=208'} classList='project-preview__image project-preview__image--diagram' src={diagram.fields.file.url} />}
					{ craft && <ImageComponent imagesQuery={'?fl=progressive&w=322&h=208'} classList='project-preview__image project-preview__image--craft' src={craft.fields.file.url} />}
				</div>
			</div>
		);
	}
	return (
		<div className={`project-preview__thumbs project-preview__thumbs--${orientation}`}>
			<div className="project-preview__thumbs__left-col">
				{ main && <ImageComponent imagesQuery={drawingQuery} classList='project-preview__image project-preview__image--main' src={main.fields.file.url} />}
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