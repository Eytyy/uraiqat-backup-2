import React from 'react';
import { getRandomGlyph } from '../../helpers';

const PatternLine = ({ noOfChars }) => {
	let count = 1;

	const generatePattern = () => {
		let pattern = '';
		for (count; count <= noOfChars; count++) {
			pattern += getRandomGlyph();
		}
		return pattern;
	};

	return <div className='patternline'>{generatePattern()}</div>;
};

export default PatternLine;