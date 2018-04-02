import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderDTMainNav from './HeaderDTMainNav';
import HeaderPatternChunk from './HeaderPatternChunk';

const HeaderDTMain = () => {
	const numberOfStaticItems = 'U'.length + 'Uraiqat'.length;
	const fixedStart = 10;
	const config = {
		spacesBefore: 1,
		spacesAfter: 3,
		separator: '/',
		items : [
			{ name: 'Practice', link: '/practice', glyph: { className: 'ind', content: '->' }, size: 'Practice'.length },
			{ name: 'Work', link: '/work', glyph: { className: 'ind', content: '->' }, size: 'Work'.length },
			{ name: 'Atelier', link: '/atelier', glyph: { className: 'ind', content: '->' }, size: 'Atelier'.length },
			{ name: 'Contact', link: '/contact', glyph: { className: 'ind', content: '->' }, size: 'Contact'.length },
		]
	};
	const reservedNavSpaces = config.items.reduce((current, next) => {
		return current + next.size + next.glyph.content.length;
	}, 0);
	const reservedNavEmptySpaces = config.items.length * (config.spacesBefore + config.spacesAfter);
	const numberofNavSeparators = config.items.length - 1;
	const totalReservedSpaces = reservedNavSpaces + reservedNavEmptySpaces + numberofNavSeparators + numberOfStaticItems + fixedStart;
	return (
		<div className="header--desktop__main">
			<NavLink className="link" to="/">U</NavLink>
			<HeaderPatternChunk fixed={fixedStart} />
			<HeaderDTMainNav config={config} />
			<HeaderPatternChunk reserved={totalReservedSpaces} />
			<NavLink className="link" to="/">Uraiqat</NavLink>
		</div>
	);
};

export default HeaderDTMain;
