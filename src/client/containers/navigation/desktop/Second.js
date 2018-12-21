import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import PatternChunk from '../../../components/patterns/PatternChunk';

const Second = (props) => {
	const { location } = props;
	const numberOfStaticItems = 'Architects'.length;
	// if not atelier, we don't have secondary navigation
	// just return the pattern with the reserved "Architects" work
	if (location.pathname !== '/atelier') {
		return (
			<div className="header--desktop__main__second">
				<PatternChunk reserved={numberOfStaticItems} />
				<NavLink className="link" to="/">Architects</NavLink>
			</div>
		);
	}

	// otherwise, render the atelier sub-navigation
	const atelierConfig = {
		spacesBefore: 1,
		spacesAfter: 3,
		separator: '/',
		items : [
			{ name: 'About', id: '#about', link: '/atelier#about', glyph: { className: 'ind', content: '->' }, size: 'About'.length },
			{ name: 'Portfolio', id: '#portfolio' , link: '/atelier#portfolio', glyph: { className: 'ind', content: '->' }, size: 'Portfolio'.length },
		]
	};

	const fixedStart = window.innerWidth >= 1280 ? 11 : 8;
	const reservedNavSpaces = atelierConfig.items.reduce((current, next) => current + next.size + next.glyph.content.length, 0);
	const reservedNavEmptySpaces = atelierConfig.items.length * (atelierConfig.spacesBefore + atelierConfig.spacesAfter);
	const numberofNavSeparators = atelierConfig.items.length - 1;
	const totalReservedSpaces = reservedNavSpaces + reservedNavEmptySpaces + numberofNavSeparators + numberOfStaticItems + fixedStart;

	return (
		<div className="header--desktop__main__second">
			<PatternChunk fixed={fixedStart} />
			{
				atelierConfig.items.map(({ name, link, glyph, id }, index) =>(
					<span key={`header__link-chunk--${index + 1}`}className="header__link-chunk">
						<span className="ws">-</span>
						<NavLink className={`link menu-link ${location.hash === id ? 'active' : ''}`} to={link} >
							<span className={glyph.className}>{glyph.content}</span>
							{ name }
						</NavLink>
						<span className="ws">-</span>
						<span className="ws">-</span>
						<span className="ws">-</span>
						{ index < atelierConfig.items.length - 1 && <span className="separator">{'/'}</span>} 
					</span>)
				)
			}
			<PatternChunk reserved={totalReservedSpaces} />
		</div>
	);
	
};

export default withRouter(Second);
