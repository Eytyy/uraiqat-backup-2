import React from 'react';
import Main from './Main';
import Second from './Second';
import FilterSearch from './FilterSearch';

const Header = () => {
	return (
		<div className="website-header__inner website-header__inner--desktop wrapper">
			<Main />
			<Second />
			<FilterSearch />
		</div>
	);
};

export default Header;