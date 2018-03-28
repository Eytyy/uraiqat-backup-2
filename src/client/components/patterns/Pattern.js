import React from 'react';

import PatternLine from './PatternLine';
import { getNoOfChars } from '../../helpers';

const Pattern = ({ sliderName, patternconfig }) => {
	if (typeof window === 'undefined') {
		return <div className="pattern pattern--slider"></div>;
	}
	const numberOfLines = getNoOfChars(sliderName, patternconfig);
	const fakeArray = Array(numberOfLines.y).fill('pl');

	return (
		<div className="pattern pattern--slider">
			{
				fakeArray.map((item, index) =>
					<PatternLine key={`pl-${index}`} noOfChars={numberOfLines.x} />)
			}
		</div>
	);
};


export default Pattern;