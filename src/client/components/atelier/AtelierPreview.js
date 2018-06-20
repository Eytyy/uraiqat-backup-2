import React from 'react';
import { Link } from 'react-router-dom';

import AtelierPreviewThumbnails from './AtelierPreviewThumbnails';

const AtelierPreview = (content) => {
	const { id, title, previewMainThumbnail} = content;
	return (
		<article className="atelier-preview">
			<Link className="atelier-preview__link" to={`/atelier/${id}`}>
				<header className="atelier-preview__header">
					<h2 className="atelier-preview__project-name title">{title}</h2>
				</header>
				{previewMainThumbnail && <AtelierPreviewThumbnails main={previewMainThumbnail} />}	
			</Link>
		</article>
	);
};

export default AtelierPreview;