import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import instagram from '../icons/instagram';
import facebook from '../icons/facebook';
import linkedin from '../icons/linkedin';

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
			spaceBeforeSeparator: 2,
			spaceAfterSeparator: 2,
			separator: '/',
			link: 'https://www.instagram.com/uraiqatarchitects/',
			IconUrl: instagram,
		}, {
			name: 'facebook',
			link: 'https://web.facebook.com/uraiqatarchitects',
			separator: '/',
			spaceBeforeSeparator: 2,
			spaceAfterSeparator: 2,
			IconUrl: facebook,
		},
		{
			name: 'linkedin',
			link: 'https://ae.linkedin.com/company/uraiqat-architects',
			separator: '',
			spaceBeforeSeparator: 2,
			spaceAfterSeparator: 2,
			IconUrl: linkedin,
		}];
		let reserved = 0;
	
		if (typeof window === 'undefined') {
			return <footer className="website-footer" />;
		}
		if (window.innerWidth < 769) {
			reserved = 1;
	
			return (
				<footer className="website-footer">
					<div><PatternChunk adjust={adjust} reserved={0} /></div>
					<div><PatternChunk adjust={adjust} reserved={0} /></div>
					<div className="website-footer__icons-holder">
						{
							social.map(({name, IconUrl, link}) => (
								<Fragment key={name}>
									<a
										className={`link footer-icon footer-icon--${name}`}
										target="_blank" href={link}
										style={{
											display: 'block',
											position: 'absolute',
											top: '0px',
										}}
									>
										<IconUrl className="icon"/>
									</a>
								</Fragment>
							))
						}
						<PatternChunk adjust={adjust} reserved={reserved} />
						<NavLink to="/" className="link">A</NavLink>
					</div>
				</footer>
			);
		}
		reserved = 1 + social.reduce((curr, next) => {
			if (next.separator) {
				return curr + next.name.length + next.separator.length + next.spaceBeforeSeparator + next.spaceAfterSeparator;
			}
			return curr + next.name.length + next.spaceBeforeSeparator;
		}, 0);

		return (
			<footer className="website-footer">
				<div><PatternChunk adjust={adjust} reserved={0} /></div>
				<div><PatternChunk adjust={adjust} reserved={0} /></div>
				<div>
					{
						social.map(({name, separator, link}) => (
							<Fragment key={name}>
								<a className="link" target="_blank" href={link}>{name}</a>
								<span className="ws">-</span>
								<span className="ws">-</span>
								{
									separator &&
									<>
										<span>{'/'}</span>
										<span className="ws">-</span>
										<span className="ws">-</span>
									</>
								}
							</Fragment>
						))
					}
					<PatternChunk adjust={adjust} reserved={reserved} />
					<NavLink to="/" className="link">A</NavLink>
				</div>
			</footer>
		);
	}
}

export default Footer;
