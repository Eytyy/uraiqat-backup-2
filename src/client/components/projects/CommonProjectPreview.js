import React from 'react';
import { Link } from 'react-router-dom';

import ProjectPreviewThumbnails from './ProjectPreviewThumbnails';
import AtelierPreviewThumbnails from './AtelierPreviewThumbnails';

const Category = ({ content }) => {
	return (
		<span className="post-preview__meta__item">
			{
				content.map(({fields, sys}, index) => {
					if (index === content.length - 1) {
						return <span key={sys.id}>{fields.title || fields.name}.</span>;
					} else {
						return <span key={sys.id}>{fields.title || fields.name}, </span>;
					}
				})
			}
		</span>
	);
};

const CommonProjectPreview = (props) => {
	const { id, title, year, category, featured, type } = props;
	console.log(category);
	const featuredClass = typeof featured !== 'undefined' && featured ? 'featured' : 'default';
	return (
		<article className={`${type}-preview ${type}-preview--${featuredClass}`}>
			<Link className={`${type}-preview__link`} to={`/${ type === 'project' ? 'work' : 'atelier'}/${id}`}>
				{
					type === 'project' ?
						<ProjectPreviewThumbnails {...props} /> :
						<AtelierPreviewThumbnails {...props} />
				}
				<header className={`${type}-preview__header`}>
					<h2 className={`${type}-preview__project-name title`}>{title}</h2>
					<div className="post-preview__meta">
						{ year && <span className="post-preview__meta__item">{year}{' -> '}</span>}
						{ category && category.length !== 0 ? <Category content={category} /> : null }
					</div>
				</header>
			</Link>
		</article>
	);
};

export default CommonProjectPreview;