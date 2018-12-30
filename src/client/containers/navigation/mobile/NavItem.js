import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ link, glyph, name, exact }) => {
	const extraClass = typeof exact === 'undefined' ? null : exact ? 'exact' : 'not-exact';
	return (
		<NavLink activeClassName="active" className={`link menu-link ${extraClass}`} to={link}>
			{ name }
			<span className="ws">-</span>
			<span className={glyph.className}>{glyph.content}</span>
			<span className="ws">-</span>
		</NavLink>
	);
};

export default NavItem;