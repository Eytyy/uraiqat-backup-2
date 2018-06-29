import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getAppConfigs } from '../../reducers';
import PatternLine from './PatternLine';
import { getNoOfChars, getWindowDimensions, getFontValues, getMaxWidth } from '../../helpers';


class LoadingPattern extends Component {
	render() {
		if (typeof window === 'undefined') {
			return <div className="pattern pattern--loading"></div>;
		}
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
		return (
			<div className="pattern pattern--loading">
				{ fakeArray.map((item, index) => <PatternLine key={`pl-${index}`} noOfChars={numberOfLines.x} />)}
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