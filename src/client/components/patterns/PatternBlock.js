import React from 'react';
import PatternLine from './PatternLine';
import { getNoOfChars, getWindowDimensions, getFontValues, getMaxWidth } from '../../helpers';

const PatternBlock = ({ reservedContent }) => {
	if (typeof window === 'undefined') {
		return <div className="pattern pattern--block"></div>;
	}
	const windowSize = getWindowDimensions();
	let maxWidth = getMaxWidth();

	const font = getFontValues();
	const config = {
		w: maxWidth,
		h: windowSize.h - (font.characterHeight * 2) - (font.characterHeight * 3) - (font.characterHeight * 3) - (font.characterHeight * reservedContent),
	};
	const numberOfLines = getNoOfChars('loading', config);
	const fakeArray = Array(numberOfLines.y).fill('pl');
	
	return (
		<div className="pattern pattern--contact-block">
			{ fakeArray.map((item, index) => <PatternLine key={`pl-${index}`} noOfChars={numberOfLines.x} />)}
		</div>
	);
};


export default PatternBlock;