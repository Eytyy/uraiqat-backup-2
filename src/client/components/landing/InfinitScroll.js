import React, { Component } from 'react';
import throttle from 'lodash/throttle';

class InfinitScroll extends Component {
	state = {
		initialIndex: 1,
		skip: 0,
	}
	visibleContent = [];
	section = React.createRef()

	onScroll = throttle(
		(e) => {
			const { content } = this.props;
			if (this.visibleContent.length === content.length) {
				return;
			}
			if (window.innerHeight * this.state.initialIndex >= this.section.current.offsetHeight - window.scrollY) {
				requestAnimationFrame(this.updateUi);
			}
		}, 500, { leading: false, trailing: true }
	);

	updateUi = () => {
		this.setState({
			skip: this.state.skip + 1,
			initialIndex: this.state.initialIndex + 1,
		});
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	render() {
		const numberOfVisibleItemsPerScroll = 8;
		const { render, content, classList } = this.props;
		if (typeof content === 'undefined') {
			return null;
		}
		this.visibleContent = typeof this.state.skip !== 'undefined' ?
			content.slice(0, (this.state.skip * numberOfVisibleItemsPerScroll + numberOfVisibleItemsPerScroll)) : content;
		return (
			<section ref={this.section} className={classList}>
				{ render(this.visibleContent) }
		 	</section>
		 );
	}
}

export default InfinitScroll;