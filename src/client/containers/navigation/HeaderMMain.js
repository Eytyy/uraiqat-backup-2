import React from 'react';

import PatternChunk from '../../components/patterns/PatternChunk';
import HeaderMNavItem from './HeaderMNavItem';

const HeaderDTMain = ({ navigation }) => {
	return (
		<div className="header--mobile__main">
			{
				navigation.map(({ link, glyph, name }, index) =>
					<div key={`mobile-link--${index}`} className="header-mobile__main__item">
						<HeaderMNavItem name={name} link={link} glyph={glyph} />
						<PatternChunk reserved={name.length + glyph.content.length + 2} />
					</div>
				)
			}
			<PatternChunk reserved={0} />
		</div>
	);
};

export default HeaderDTMain;
