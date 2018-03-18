import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="website-footer">
			<div>
				{'/-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////'}
			</div>
			<div>
				{'-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-'}
			</div>
			<div>
				{'\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-\\-----/-/|<//-////-'}
				<NavLink className="link" activeClassName="active" to="/">A</NavLink>
			</div>
		</footer>
	);
};

export default Footer;
