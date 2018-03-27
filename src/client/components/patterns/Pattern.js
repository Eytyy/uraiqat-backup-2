import React from 'react';

import PatternLine from './PatternLine';
import { getNoOfChars } from '../../helpers';

const Pattern = ({ sliderName }) => {
	if (typeof window === 'undefined') {
		return <div className="pattern pattern--slider"></div>;
	}

	const numberOfLines = getNoOfChars(sliderName);
	const fakeArray = Array(numberOfLines.y).fill('pl');

	return (
		<div className="pattern pattern--slider">
			{
				fakeArray.map((item, index) =>
					<PatternLine key={`pl-${index}`} noOfChars={numberOfLines.x} ></PatternLine>)
			}
		</div>
	);
};


export default Pattern;