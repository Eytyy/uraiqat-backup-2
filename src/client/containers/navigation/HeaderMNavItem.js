import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderMNavItem = ({ link, glyph, name }) => {
	return (
		<NavLink
			activeClassName="active"
			className="link menu-link"
			to={link}
		>
			{ name }
			<span className="ws">-</span>
			<span className={glyph.className}>{glyph.content}</span>
			<span className="ws">-</span>
		</NavLink>
	);
};

export default HeaderMNavItem;