import React from 'react';
import PatternLine from './PatternLine';
import { getNoOfChars, getWindowDimensions } from '../../helpers';

const LoadingPattern = () => {
	if (typeof window === 'undefined') {
		return <div className="pattern pattern--loading"></div>;
	}
	const windowSize = getWindowDimensions();
	const maxWidth = 1344 + 28;
	const config = {
		w: maxWidth,
		h: windowSize.h - 32
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