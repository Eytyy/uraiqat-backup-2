import React from 'react';

const FlexibleImageComponent = ({ content }) => {
	const { description, file } = content.fields;
	return (
		<div className="post__media">
			<img src={file.url} />
			{ description && <div className="post__media__caption">{description}</div>}
		</div>
	);
};

export default FlexibleImageComponent;