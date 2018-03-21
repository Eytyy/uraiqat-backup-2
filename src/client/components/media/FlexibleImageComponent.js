import React from 'react';

const FlexibleImageComponent = ({ content }) => {
	const { title, file } = content.fields;
	return <img src={file.url} />;
};

export default FlexibleImageComponent;