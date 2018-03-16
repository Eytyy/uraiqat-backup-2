import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = () => {
	return (
		<nav>
			<div>
				<NavLink className="link" to="/">U</NavLink>
				{'----/-/|<'}<span className="ws">-</span>
				<NavLink activeClassName="active" className="link menu-link" to="/practice"><span className="ind">{'->'}</span>Practice</NavLink>
				<span className="ws">-</span><span className="ws">-</span><span className="ws">-</span>{'/'}
				<span className="ws">-</span>
				<NavLink activeClassName="active" className="link menu-link" to="/work"><span className="ind">{'->'}</span>Work</NavLink>
				<span className="ws">-</span><span className="ws">-</span><span className="ws">-</span>{'/'}
				<span className="ws">-</span>
				<NavLink activeClassName="active" className="link menu-link" to="/atelier"><span className="ind">{'->'}</span>Atelier</NavLink>
				<span className="ws">-</span><span className="ws">-</span><span className="ws">-</span>{'/'}
				<span className="ws">-</span>
				<NavLink activeClassName="active" className="link menu-link"to="/contact"><span className="ind">{'->'}</span>Contact</NavLink>
				<span className="ws">-</span><span className="ws">-</span><span className="ws">-</span>{'-/|<//-////-\\-----/-'}
				<NavLink className="link" activeClassName="active" to="/">URAIQAT</NavLink>
				{'///-\\-'}
			</div>
			<div>
				{'----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/'}
				<NavLink className="link" to="/">ARCHITECTS</NavLink>
				{'\\--'}
			</div>
			<div>
				{'---/-/|<//'}<span className="ws">-</span><span className="ws">-</span>
				<a className="link" href="#">+Filter</a>
				<span className="ws">-</span><span className="ws">-</span>{'/'}<span className="ws">-</span><span className="ws">-</span>
				<a className="link" href="#">Search</a><span className="ws">-</span><span className="ws">-</span>
				{'//-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\---'}
			</div>
			
		</nav>
	);
};

export default menu;
