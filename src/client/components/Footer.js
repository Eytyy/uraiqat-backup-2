import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import PatternChunk from '../components/patterns/PatternChunk';

class Footer extends Component {
	state = {
		width: 0,
		height: 0
	};

	updateDimensions = () => {
		let width = window.innerWidth;
		let height = window.innerHeight;
		this.setState({width, height});
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions);
	}

	render() {
		const { adjust } = this.props;
		const social = [{
			name: 'instagram',
			spaceBeforeSeparator: 3,
			spaceAfterSeparator: 3,
			separator: '/',
			link: 'http://www.instagram.com'
		}, {
			name: 'facebook',
			link: 'http://www.facebook.com',
			separator: '',
			spaceBeforeSeparator: 3,
			spaceAfterSeparator: 3,
		}];
		const reserved = 1 + social.reduce((curr, next) => {
			if (next.separator) {
				return curr + next.name.length + next.separator.length + next.spaceBeforeSeparator + next.spaceAfterSeparator;
			}
			return curr + next.name.length + next.spaceBeforeSeparator;
		}, 0);
		return typeof window === 'undefined' ?
			<footer className="website-footer" />:
			(
				<footer className="website-footer">
					<div><PatternChunk adjust={adjust} reserved={0} /></div>
					<div><PatternChunk adjust={adjust} reserved={0} /></div>
					<div>
						{
							social.map(({name, separator, link}) => (
								<Fragment key={name}>
									<NavLink className="link" to={link}>{name}</NavLink>
									<span className="ws">-</span>
									<span className="ws">-</span>
									<span className="ws">-</span>
									{
										separator &&
										<>
											<span>{'/'}</span>
											<span className="ws">-</span>
											<span className="ws">-</span>
											<span className="ws">-</span>
										</>
									}
								</Fragment>
							))
						}
						<PatternChunk adjust={adjust} reserved={reserved} />
						<a className="link" target="_blank" to="/">A</a>
					</div>
				</footer>
			);
	}
}

export default Footer;
