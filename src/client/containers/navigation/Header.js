import React from 'react';

import { getWindowDimensions } from '../../helpers';

import HeaderDT from './HeaderDT';
import HeaderM from './HeaderM';

const Header = () => {
	if (typeof window === 'undefined') {
		return <header className="website-header"></header>;
	}
	const windowSize = getWindowDimensions();
	return (
		<header className="website-header">
			{ windowSize.w >= 1280 ? <HeaderDT /> : <HeaderM /> }
		</header>
	);
};

export default Header;