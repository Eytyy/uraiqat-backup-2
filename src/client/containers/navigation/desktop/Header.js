import React from 'react';
import HeaderDTMain from './Main';
import HeaderDTSecond from './Second';
import HeaderDTFilterSearch from './FilterSearch';

const HeaderDT = () => {
	return (
		<div className="website-header__inner website-header__inner--desktop wrapper">
			<HeaderDTMain />
			<HeaderDTSecond />
			<HeaderDTFilterSearch />
		</div>
	);
};

export default HeaderDT;