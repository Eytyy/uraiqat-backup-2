import React from 'react';

import PatternChunk from '../../components/patterns/PatternChunk';
import HeaderMNavItem from './HeaderMNavItem';

const HeaderDTMain = ({ navigation, adjust }) => {
	return (
		<div className="header--mobile__main">
			{
				navigation.map(({ link, glyph, name }, index) =>
					<div key={`mobile-link--${index}`} className="header-mobile__main__item">
						<HeaderMNavItem adjust={adjust} name={name} link={link} glyph={glyph} />
						<PatternChunk adjust={adjust} reserved={name.length + glyph.content.length + 2} />
					</div>
				)
			}
			<PatternChunk adjust={adjust} reserved={0} />
		</div>
	);
};

export default HeaderDTMain;
