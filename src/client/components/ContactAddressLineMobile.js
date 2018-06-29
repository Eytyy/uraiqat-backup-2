import React from 'react';
import PatternChunk from './patterns/PatternChunk';
import { getNoOfChars, getMaxWidth } from '../helpers';

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

const ContactLineBlock = ({ label, content, type, reserved, emptyContent = 0, adjust }) => {
	return (
		<div className="contact-line">
			{ label && <span>{label}</span> }
			{ label && <span className="ws">-</span>}
			<ContactAddressLineContent content={content} type={type} />
			<span className="ws">-</span>
			<PatternChunk reserved={reserved - emptyContent} adjust={adjust} />
		</div>
	);
};

const MultipleContactLineBlocks = ({ config, type, max, adjust }) => {
	const content = config.content.split(/[ ,.]+/);
	const blocks = {};
	let limit = max;
	let count = 0;
	let emptyContent = 0;

	function appendTextToBlock (text) {
		if (blocks[`block${count}`].length > 0) {
			blocks[`block${count}`] += ` ${text}`;
			limit = limit - text.length - 1;

		} else {
			blocks[`block${count}`] += text;
			limit = limit - text.length;
		}
	}

	function createNewLineBlock() {
		count = count + 1;
		limit = max;
		blocks[`block${count}`] = '';
	}
	
	content.forEach(item => {
		if (item === '') {
			limit -= 1;
			emptyContent += 1;
			return;
		}
		if (limit && item.length < limit) {
			if (typeof blocks[`block${count}`] !== 'undefined') {
				appendTextToBlock(item);
			} else {
				createNewLineBlock();
				appendTextToBlock(item);
			} 
		} else {
			createNewLineBlock();
			appendTextToBlock(item);
		}
	});
	return Object.keys(blocks).map(key => {
		let singleReserve = blocks[key].length + 2;
		return <ContactLineBlock adjust={adjust} key={key} content={blocks[key]} reserved={singleReserve} emptyContent={emptyContent} type={type} />;
	});
};

const ContactAddressLineMobile = ({ config, type, adjust }) => {
	const reserved = config.totalLength;
	let maxWidth = getMaxWidth();
	const windowConfig = {
		w: maxWidth,
		h: 1,
	};
	let maxNoOfChars = getNoOfChars('contact', windowConfig, adjust);

	if (typeof window === 'undefined') {
		return <div className="contact-line" />;
	}
	return maxNoOfChars.x <= reserved ? 
		<MultipleContactLineBlocks adjust={adjust} config={config} type={type} reserved={reserved} max={maxNoOfChars.x} /> :
		<ContactLineBlock adjust={adjust} {...config} type={type} reserved={reserved} />;
};

export default ContactAddressLineMobile;