import React from 'react';
import ImageComponent from '../ImageComponent';

const ProjectPreviewThumbnails = ({ main, craft, diagram, drawing}) => {
	return (
		<div className="project-preview__thumbs">
			<div className="project-preview__thumbs__left-col">
				{ main && <ImageComponent classList='project-preview__image project-preview__image--main' src={main.fields.file.url} />}
				{ drawing && <ImageComponent classList='project-preview__image project-preview__image--drawing' src={drawing.fields.file.url} />}
			</div>
			<div className="project-preview__thumbs__right-col">
				{ diagram && <ImageComponent classList='project-preview__image project-preview__image--diagram' src={diagram.fields.file.url} />}
				{ craft && <ImageComponent classList='project-preview__image project-preview__image--craft' src={craft.fields.file.url} />}
			</div>
		</div>
	);
};

export default ProjectPreviewThumbnails;