import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import FilterSearch from './FilterSearch';

class menu extends Component {
	constructor() {
		super();
	}
	render() {
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
				<FilterSearch />				
			</nav>
		);
	}
}

export default menu;
