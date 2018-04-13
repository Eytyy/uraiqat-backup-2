import React from 'react';
import { getNoOfChars, getMaxWidth, getRandomGlyph } from '../../helpers';

const Chunk = ({ noOfGlyphs }) => {
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

const PatternChunkFixed = ({ fixed }) => <Chunk noOfGlyphs={fixed} />;

const PatternChunkReserved = ({ reserved }) => {
	let maxWidth = getMaxWidth();
	const config = {
		w: maxWidth,
		h: 1,
	};

	let maxNoOfChars = getNoOfChars('navigation', config);
	
	const noOfAllowedChars = maxNoOfChars.x - reserved;
	return <Chunk noOfGlyphs={noOfAllowedChars} />;
};

const PatternChunk = ({ fixed, reserved }) => {
	return typeof fixed !== 'undefined' ?
		<PatternChunkFixed fixed={fixed} /> :
		<PatternChunkReserved reserved={reserved} />;
};

export default PatternChunk;