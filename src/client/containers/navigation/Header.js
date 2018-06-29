import React, { Component } from 'react';

import HeaderDT from './desktop/Header';
import HeaderM from './mobile/Header';

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
		return typeof window === 'undefined' ? 
			<header className="website-header"></header> :
			<header className="website-header">
				{ this.state.width >= 1024 && <HeaderDT /> || <HeaderM /> }
			</header>;
	}
}

export default Header;