import React from 'react';
import Main from './Main';
import Second from './Second';
import FilterSearchWrapper from './FilterSearchWrapper';

const Header = () => {
	return (
		<div className="website-header__inner website-header__inner--desktop wrapper">
			<Main />
			<Second />
			<FilterSearchWrapper />
		</div>
	);
};

export default Header;