import React, { Component } from 'react';

class Filter extends Component {
	constructor() {
		super();
		this.state = {
			active: false
		};
		this.onFilterClick = this.onFilterClick.bind(this);
	}
	onFilterClick() {
		this.setState({
			active: !this.state.active,
		});
	}
	render() {
		const { content } = this.props;
		return (
			<span onClick={this.onFilterClick} className="filter link">
				{ this.state.active ? 
					<span className="filterBox">[<span className="filterBox__state">x</span>]</span> :
					<span className="filterBox">[<span className="filterBox__state"> </span>]</span>
				} 
				<span className="ws">-</span>								
				<span>{content}</span>
				<span className="ws">-</span>
				<span className="ws">-</span>
				<span className="ws">-</span>
			</span>
		);
	}
}

export default Filter;