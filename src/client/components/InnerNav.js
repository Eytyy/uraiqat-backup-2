import React from 'react';
import { Link } from 'react-router-dom';

const InnerNav = ({ prev, next, type}) => {
	const label = () => {
		switch(type) {
		case 'journal':
			return 'Post';
		default:
			return 'Project';
		}
	};
	return (
		<aside className="inner__nav">
			{ prev &&
				<Link to={`/${type}/${prev.id}`} className="inner__nav__item inner__nav__item--prev link" >
					{'<-'}Prev {label()}
				</Link>
			}
			{ next && <Link to={`/${type}/${next.id}`} className="inner__nav__item inner__nav__item--next link" >
				Next {label()}{'->'}</Link> }
		</aside>
	);
};

export default InnerNav;