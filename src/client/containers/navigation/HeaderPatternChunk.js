import React from 'react';
import { getNoOfChars, getMaxWidth, getRandomGlyph } from '../../helpers';

const PatternChunk = ({ noOfGlyphs }) => {
	let count = 1;
	
	const generatePattern = () => {
		let pattern = '';
		const glyphs = ['-', '-', '/', '\\', '-', '-', '|', '-', '>', '-', '<', '\\', '-', '|', '-', '-', '|', '-', '|', '-', '/',  '-', '-', '-', '/', '-', '\\', '-'];
		for (count; count <= noOfGlyphs; count++) {
			pattern += getRandomGlyph(glyphs);
		}
		return pattern;
	};
	return <span className="glyphs-chunk">{generatePattern()}</span>;
};

const HeaderPatternChunkFixed = ({ fixed }) => <PatternChunk noOfGlyphs={fixed} />;

const HeaderPatternChunkReserved = ({ reserved }) => {
	let maxWidth = getMaxWidth();
	const config = {
		w: maxWidth,
		h: 1,
	};

	let maxNoOfChars = getNoOfChars('navigation', config);
	
	const noOfAllowedChars = maxNoOfChars.x - reserved;
	return <PatternChunk noOfGlyphs={noOfAllowedChars} />;
};

const HeaderPatternChunk = ({ fixed, reserved }) => {
	return typeof fixed !== 'undefined' ?
		<HeaderPatternChunkFixed fixed={fixed} /> :
		<HeaderPatternChunkReserved reserved={reserved} />;
};

export default HeaderPatternChunk;