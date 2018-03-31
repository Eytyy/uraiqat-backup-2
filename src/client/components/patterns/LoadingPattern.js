import React from 'react';
import PatternLine from './PatternLine';
import { getNoOfChars, getWindowDimensions, getFontValues } from '../../helpers';

const LoadingPattern = () => {
	if (typeof window === 'undefined') {
		return <div className="pattern pattern--loading"></div>;
	}
	const windowSize = getWindowDimensions();
	let maxWidth;

	if (windowSize.w >= 1600) {
		maxWidth = 1512;
	} else if (windowSize.w >= 1440 ) {
		maxWidth = 1344;
	} else if (windowSize.w >= 1280 ) {
		maxWidth = 1162;
	} else if (windowSize.w >= 1024 ) {
		maxWidth = 952;
	} else if (windowSize.w >= 768) {
		maxWidth = 720;
	} else {
		maxWidth = 320;
	}
	const font = getFontValues();
	const config = {
		w: maxWidth,
		h: windowSize.h - (font.characterHeight * 2),
	};
	const numberOfLines = getNoOfChars('loading', config);
	const fakeArray = Array(numberOfLines.y).fill('pl');
	
	return (
		<div className="pattern pattern--loading">
			{ fakeArray.map((item, index) => <PatternLine key={`pl-${index}`} noOfChars={numberOfLines.x} />)}
		</div>
	);
};


export default LoadingPattern;