import React from 'react';
import { Link } from 'react-router-dom';

const InnerNav = ({ prev, next, type}) => {
	return (
		<aside className="inner__nav">
			{ prev &&
				<Link to={`/${type}/${prev.id}`} className="inner__nav__item inner__nav__item--prev link" >
					{'<-'}Prev
				</Link>
			}
			{ next && <Link to={`/${type}/${next.id}`} className="inner__nav__item inner__nav__item--next link" >
				Next{'->'}</Link> }
		</aside>
	);
};

export default InnerNav;