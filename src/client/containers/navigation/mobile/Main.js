import React from 'react';

import PatternChunk from '../../../components/patterns/PatternChunk';
import NavItem from './NavItem';
import AtelierNavigation from './AtelierNavigation';

const Main = ({ navigation, adjust }) => {
	return (
		<div className="header--mobile__main">
			{
				navigation.map(({ link, glyph, name, id }, index) =>
					id === 'atelier' ?
					<AtelierNavigation
						key={`mobile-link--${index}`}
						adjust={adjust}
						link={link}
						glyph={glyph}
						name={name}
						id={id}
					/> :
					<div key={`mobile-link--${index}`} className="header-mobile__main__item">
						<NavItem adjust={adjust} name={name} link={link} glyph={glyph} />
						<PatternChunk adjust={adjust} reserved={name.length + glyph.content.length + 2} />
					</div>
				)
			}
			<PatternChunk adjust={adjust} reserved={0} />
		</div>
	);
};

export default Main;
