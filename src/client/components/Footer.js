import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PatternChunk from '../components/patterns/PatternChunk';

class Footer extends Component {
	constructor() {
		super();
		this.state = {
			width: 0,
			height: 0
		};
		this.updateDimensions = this.updateDimensions.bind(this);
	}
	updateDimensions() {
		let width = window.innerWidth;
		let height = window.innerHeight;

		this.setState({width, height});
	}
	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions);
	}
	render() {
		if (typeof window === 'undefined') {
			return <footer className="website-footer" />;
		}
		return (
			<footer className="website-footer">
				<div><PatternChunk reserved={0} /></div>
				<div><PatternChunk reserved={0} /></div>
				<div>
					<PatternChunk reserved={1} />
					<NavLink className="link" activeClassName="active" to="/">A</NavLink>
				</div>
			</footer>
		);
	}
}

export default Footer;
