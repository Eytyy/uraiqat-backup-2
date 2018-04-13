import React from 'react';
import PatternChunk from '../components/patterns/PatternChunk';

const ContactAddressLine = ({ config }) => {
	const reserved = config.spaces + config.contentLength + 4;
	if (typeof window === 'undefined') {
		return <div className="contact-line" />;
	}
	return (
		<div className="contact-line">
			<PatternChunk fixed={4} />
			<span className="ws">-</span>
			<span className="ws">-</span>
			{ config.content }
			<span className="ws">-</span>
			<span className="ws">-</span>
			<PatternChunk reserved={reserved} />
		</div>
	);
};

export default ContactAddressLine;