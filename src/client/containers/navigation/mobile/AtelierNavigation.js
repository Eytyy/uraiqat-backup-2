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
			{ name: 'About', exact: path === '/atelier', id: 'about', link: '/atelier', glyph: { className: 'ind', content: '<-' }, size: 'About'.length },
			{ name: 'Portfolio', exact: path === '/atelier/portfolio', id: 'portfolio', link: '/atelier/portfolio', glyph: { className: 'ind', content: '<-' }, size: 'Portfolio'.length },
		]
	};
	return (
		<>
			<div className="header-mobile__main__item">
				<NavItem adjust={adjust} name={name} link={link} glyph={glyph} />
				<PatternChunk adjust={adjust} reserved={name.length + glyph.content.length + 2} />
			</div>
			{
				config.items.map(({ name, glyph, id, link, exact }) => (
					<div key={`header__link-chunk--${id}`} className="header-mobile__main__item">
						<span className="header__link-chunk">
							<span className="ch">-</span>
							<span className="ws">-</span>
							<NavItem exact={exact} adjust={adjust} name={name} link={link} glyph={glyph} />
						</span>
						<PatternChunk adjust={adjust} reserved={name.length + glyph.content.length + 2 + 2} />
					</div>
				))
			}
			<PatternChunk adjust={adjust} reserved={0} />
		</>
	);
};


export default AtelierNavigation
