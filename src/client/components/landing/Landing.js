import React from 'react';
import LandingFeatured from './LandingFeatured';
import LandingChrono from './LandingChrono';
import BodyText from'../BodyText';
import MediaComponent from'../media/MediaComponent';

const Landing = ({ page, content }) => {
	const classList = `landing-page landing-page--${page} main-section`;
	const { mainContent, featuredContent, intro } = content;
	return ( 
		<section className={classList}>
			{
				page === 'atelier' && intro &&
					(<div className="atelier-landing__top">
						<div className="atelier-landing__top__media">
							{ intro.mainMedia && <MediaComponent media={intro.mainMedia} /> }
						</div>
						<div className="atelier-landing__top__desc">
							{ intro.desc && <BodyText content={intro.desc} />}
						</div>
					</div>)
			}
			{ featuredContent && <LandingFeatured page={page} content={featuredContent}></LandingFeatured>}
			{ mainContent && <LandingChrono page={page} content={mainContent}></LandingChrono>}
		</section>
	);
};

export default Landing;