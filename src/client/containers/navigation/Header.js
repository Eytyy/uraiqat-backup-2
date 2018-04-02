import React, { Component } from 'react';

import HeaderDT from './HeaderDT';
import HeaderM from './HeaderM';

class Header extends Component {
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
			return <header className="website-header"></header>;
		}
		return (
			<header className="website-header">
				{ this.state.width >= 1280 ? <HeaderDT /> : <HeaderM /> }
			</header>
		);
	}
}

export default Header;