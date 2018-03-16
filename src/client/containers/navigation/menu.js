import React from 'react';
import { Link } from 'react-router-dom';

const menu = () => {
	return (
		<nav>
			<div>
				<Link to="/">U</Link>
				{'----/-/|<'}<span className="ws">-</span>
				<Link className="menu-link" to="/practice"><span className="ind">{'->'}</span>Practice</Link>
				<span className="ws">-</span><span className="ws">-</span><span className="ws">-</span>{'/'}
				<span className="ws">-</span>
				<Link className="menu-link" to="/work"><span className="ind">{'->'}</span>Work</Link>
				<span className="ws">-</span><span className="ws">-</span><span className="ws">-</span>{'/'}
				<span className="ws">-</span>
				<Link className="menu-link" to="/atelier"><span className="ind">{'->'}</span>Atelier</Link>
				<span className="ws">-</span><span className="ws">-</span><span className="ws">-</span>{'/'}
				<span className="ws">-</span>
				<Link className="menu-link"to="/contact"><span className="ind">{'->'}</span>Contact</Link>
				<span className="ws">-</span><span className="ws">-</span><span className="ws">-</span>{'-/|<//-////-\\-----/-'}
				<Link to="/">URAIQAT</Link>
				{'///-\\-'}
			</div>
			<div>
				{'----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/'}
				<Link to="/">ARCHITECTS</Link>
				{'\\--'}
			</div>
			<div>
				{'---/-/|<//'}<span className="ws">-</span><span className="ws">-</span>
				<a href="#">+Filter</a>
				<span className="ws">-</span><span className="ws">-</span>{'/'}<span className="ws">-</span><span className="ws">-</span>
				<a href="#">Search</a><span className="ws">-</span><span className="ws">-</span>
				{'//-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\---'}
			</div>
			
		</nav>
	);
};

export default menu;
