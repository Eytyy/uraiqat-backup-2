import React, { Fragment } from 'react';
import NavItem from './NavItem';
import PatternChunk from '../../../components/patterns/PatternChunk';

const AtelierNavigation = (props) => {
	const { adjust, link, glyph, name, path } = props;
	const config = {
		spacesBefore: 1,
		spacesAfter: 3,
		separator: '/',
		items : [
			{ name: 'Portfolio', exact: path === '/atelier', id: 'portfolio', link: '/atelier', glyph: { className: 'ind', content: '<-' }, size: 'Portfolio'.length },
			{ name: 'About', exact: path === '/atelier/about', id: 'about', link: '/atelier/about', glyph: { className: 'ind', content: '<-' }, size: 'About'.length },
		]
	};


	const reservedNavSpaces = config.items.reduce((current, next) => current + next.size + next.glyph.content.length, 0);
	const reservedNavEmptySpaces = config.items.length * (config.spacesBefore + config.spacesAfter);
	const numberofNavSeparators = config.items.length - 1;
	const totalReservedSpaces = (name.length + glyph.content.length + 2) + reservedNavSpaces + reservedNavEmptySpaces + numberofNavSeparators;

	return (
		<div className="header-mobile__main__item">
			<NavItem adjust={adjust} name={name} link={link} glyph={glyph} />
			{
				config.items.map(({ name, glyph, id, link, exact }, index) => (
					<Fragment key={id}>
						<span key={`header__link-chunk--${index + 1}`} className="header__link-chunk">
							<span className="ws">-</span>
							<NavItem exact={exact} adjust={adjust} name={name} link={link} glyph={glyph} />
							<span className="ws">-</span>
							<span className="ws">-</span>
							<span className="ws">-</span>
							{ index < config.items.length - 1 && <span className="separator">{'/'}</span>} 
						</span>
					</Fragment>
				))
			}
			<PatternChunk adjust={adjust} reserved={totalReservedSpaces} />
		</div>
	);
};


export default AtelierNavigation
