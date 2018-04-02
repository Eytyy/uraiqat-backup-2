import React from 'react';
import HeaderDTMain from './HeaderDTMain';
import HeaderDTSecond from './HeaderDTSecond';
import HeaderDTFilterSearch from './HeaderDTFilterSearch';

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