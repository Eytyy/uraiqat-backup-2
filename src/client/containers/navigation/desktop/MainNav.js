import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderDTMainNav = ({ config }) => {
	return (
		<nav className="header--desktop__main__nav">
			{
				config.items.map(({ name, link, glyph }, index) =>(
					<span key={`header__link-chunk--${index + 1}`}className="header__link-chunk">
						<span className="ws">-</span>
						<NavLink
							activeClassName="active"
							className="link menu-link"
							to={link}
						>
							<span className={glyph.className}>{glyph.content}</span>
							{ name }
						</NavLink>
						<span className="ws">-</span>
						<span className="ws">-</span>
						<span className="ws">-</span>
						{ index < config.items.length - 1 && <span className="separator">{'/'}</span>} 
					</span>)
				)
			}
		</nav>
	);
};

export default HeaderDTMainNav;