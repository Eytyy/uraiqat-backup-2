import React from 'react';
import PatternChunk from '../components/patterns/PatternChunk';

const ContactAddressLineContent = ({ type, content }) => {
	switch(type) {
	case 'tel':
		return <a className="link" href={`tel:${content}`}>{content}</a>;
	case 'email':
		return <a className="link" href={`mailto:${content}`}>{content}</a>;
	default:
		return <span className="blue">{content}</span>;
	}
};
const ContactAddressLine = ({ config, type }) => {
	const reserved = config.totalLength + 4;
	if (typeof window === 'undefined') {
		return <div className="contact-line" />;
	}
	return (
		<div className="contact-line">
			<PatternChunk fixed={4} />
			<span className="ws">-</span>
			<span className="ws">-</span>
			{ config.label && <span>{config.label}</span> }
			{ config.label && <span className="ws">-</span>}
			<ContactAddressLineContent content={config.content} type={type} />
			<span className="ws">-</span>
			<span className="ws">-</span>
			<PatternChunk reserved={reserved} />
		</div>
	);
};

export default ContactAddressLine;