import React from 'react';
import marked from 'marked';

const BodyText = ({ content }) => {
	const FormattedHtml = () => ({ __html: marked(content) });
	return (
		<div className="field-body" dangerouslySetInnerHTML={FormattedHtml()} />
	);
};

export default BodyText;