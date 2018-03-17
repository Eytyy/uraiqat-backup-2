import React from 'react';
import { Link } from 'react-router-dom';

import ProjectPreviewThumbnails from './ProjectPreviewThumbnails';

const Typology = ({ content }) => {
	return (
		<span className="post-preview__meta__item">
			{
				content.map(({fields, sys}, index) => {
					if (index === content.length - 1) {
						return <span key={sys.id}>{fields.title}.</span>;
					} else {
						return <span key={sys.id}>{fields.title}, </span>;
					}
				})
			}
		</span>
	);
};

const ProjectPreview = (content) => {
	const { id, projectName, year, typology, previewMainThumbnail, previewDrawingThumbnail, previewDiagramThumbnail, previewCraftThumbnail } = content;
	return (
		<article className="project-preview">
			<Link className="project-preview__link" to={`/work/${id}`}>
				<header className="project-preview__header">
					<h2 className="project-preview__project-name title">{projectName}</h2>
					<div className="post-preview__meta">
						{ year && <span className="post-preview__meta__item">{year}{' -> '}</span>}
						{ typology.length !== 0 ? <Typology content={typology} /> : null }
					</div>
				</header>
				<ProjectPreviewThumbnails main={previewMainThumbnail} drawing={previewDrawingThumbnail} diagram={previewDiagramThumbnail} craft={previewCraftThumbnail} />	
			</Link>
		</article>
	);
};

export default ProjectPreview;