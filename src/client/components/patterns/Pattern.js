import React from 'react';

import PatternLine from './PatternLine';
import { getNoOfChars } from '../../helpers';

const Pattern = () => {
	if (typeof window === 'undefined') {
		return null;
	}

	const numberOfLines = getNoOfChars();
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