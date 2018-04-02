import React from 'react';

import HeaderPatternChunk from './HeaderPatternChunk';
import HeaderMNavItem from './HeaderMNavItem';

const HeaderDTMain = () => {
	const config = {
		items : [
			{ name: 'Practice', link: '/practice', glyph: { className: 'ind', content: '<-' }, size: 'Practice'.length },
			{ name: 'Work', link: '/work', glyph: { className: 'ind', content: '<-' }, size: 'Work'.length },
			{ name: 'Atelier', link: '/atelier', glyph: { className: 'ind', content: '<-' }, size: 'Atelier'.length },
			{ name: 'Contact', link: '/contact', glyph: { className: 'ind', content: '<-' }, size: 'Contact'.length },
		]
	};
	return (
		<div className="header--mobile__main">
			{
				config.items.map(({ link, glyph, name }, index) =>
					<div key={`mobile-link--${index}`} className="header-mobile__main__item">
						<HeaderMNavItem name={name} link={link} glyph={glyph} />
						<HeaderPatternChunk reserved={name.length + glyph.content.length + 2} />
					</div>
				)
			}
			<HeaderPatternChunk reserved={0} />
		</div>
	);
};

export default HeaderDTMain;
