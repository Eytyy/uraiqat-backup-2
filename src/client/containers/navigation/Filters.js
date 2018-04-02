import React, { Component } from 'react';
import Filter from './Filter';
import HeaderPatternChunk from './HeaderPatternChunk';

class Filters extends Component {
	render() {
		const { content, fixedEnd, fixedStart } = this.props;
		return (
			<div className="filters">
				<HeaderPatternChunk fixed={fixedStart} />		
				<span className="ws">-</span>
				<span className="ws">-</span>
				<span className="ws">-</span>				
				{content.map(({ title, id }) => <Filter key={id} content={title} />)}
				<HeaderPatternChunk fixed={content.leftOvers + fixedEnd} />		
			</div>
		);
	}
}

export default Filters;