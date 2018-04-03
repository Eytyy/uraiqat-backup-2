import React from 'react';
import ImageComponent from '../media/ImageComponent';

const ProjectPreviewThumbnails = ({ main, craft, diagram, drawing}) => {
	const orientation = drawing.fields.file.details.image.width > drawing.fields.file.details.image.height ? 'landscape' : 'portrait';
	const drawingQuery = orientation === 'landscape' ? '?fl=progressive&w=644' : '?fl=progressive&w=322';
	if (orientation === 'landscape') {
		return (
			<div className={`project-preview__thumbs project-preview__thumbs--${orientation}`}>
				{ main && <ImageComponent patternId="project-main-thumb" imagesQuery={'?fl=progressive&w=700'} classList='project-preview__image project-preview__image--main' src={main.fields.file.url} />}
				{ drawing && <ImageComponent patternId="project-drawing-thumb--landscape" imagesQuery={drawingQuery} classList='project-preview__image project-preview__image--drawing' src={drawing.fields.file.url} />}
				<div className="project-preview__thumbs__right-col">
					{ diagram && <ImageComponent patternId="project-other-thumb" imagesQuery={'?fl=progressive&w=322'} classList='project-preview__image project-preview__image--diagram' src={diagram.fields.file.url} />}
					{ craft && <ImageComponent patternId="project-other-thumb" imagesQuery={'?fl=progressive&w=322'} classList='project-preview__image project-preview__image--craft' src={craft.fields.file.url} />}
				</div>
			</div>
		);
	}
	return (
		<div className={`project-preview__thumbs project-preview__thumbs--${orientation}`}>
			{ main && <ImageComponent patternId="project-main-thumb" imagesQuery={'?fl=progressive&w=700'} classList='project-preview__image project-preview__image--main' src={main.fields.file.url} />}
			{ drawing && <ImageComponent patternId="project-drawing-thumb--portrait" imagesQuery={drawingQuery} classList='project-preview__image project-preview__image--drawing' src={drawing.fields.file.url} />}
			<div className="project-preview__thumbs__right-col">
				{ diagram && <ImageComponent patternId="project-other-thumb" imagesQuery={'?fl=progressive&w=322'} classList='project-preview__image project-preview__image--diagram' src={diagram.fields.file.url} />}
				{ craft && <ImageComponent patternId="project-other-thumb" imagesQuery={'?fl=progressive&w=322'} classList='project-preview__image project-preview__image--craft' src={craft.fields.file.url} />}
			</div>
		</div>
	);
};

export default ProjectPreviewThumbnails;