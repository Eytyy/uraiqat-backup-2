import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getAppConfigs } from '../../reducers';
import PatternLine from './PatternLine';
import { getNoOfChars, getWindowDimensions, getFontValues, getMaxWidth } from '../../helpers';


class LoadingPattern extends Component {
	constructor(props) {
		super(props);
		this.to = null;
		this.state = {
			tick: 0,
		};
		this.loadPattern = this.loadPattern.bind(this);
		this.reloadPattern = this.reloadPattern.bind(this);
	}
	loadPattern() {
		const { adjustForMobile } = this.props.configs;
		const windowSize = getWindowDimensions();
		let maxWidth = getMaxWidth();
		const font = getFontValues();
		const config = {
			w: maxWidth,
			h: windowSize.h - (font.characterHeight * 2),
		};
		const numberOfLines = getNoOfChars('loading', config, adjustForMobile);
		const fakeArray = Array(numberOfLines.y).fill('pl');
		return {
			fakeArray,
			numberOfLines
		};
	}
	reloadPattern() {
		this.setState({
			tick: this.state.tick + 1
		});
	}
	componentDidMount() {
		this.to = window.setInterval(this.reloadPattern, 250);
	}
	componentWillUnmount() {
		window.clearInterval(this.to);
	}
	render() {
		if (typeof window === 'undefined') {
			return <div className="pattern pattern--loading"></div>;
		}

		const pattern = this.loadPattern();
	
		return (
			<div className="pattern pattern--loading">
				{ pattern.fakeArray.map((item, index) => <PatternLine key={`pl-${index}`} noOfChars={pattern.numberOfLines.x} />)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		configs: getAppConfigs(state)
	};
};

export default withRouter(connect(
	mapStateToProps
)(LoadingPattern));