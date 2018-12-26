import React from 'react';
import CommonProjectPreview from '../projects/CommonProjectPreview';
import BodyText from'../BodyText';

const AtelierContent = (props) => {
	const { visibleContent, intro } = props;
	return (
		<>
			{intro && <section id="about" className="atelier-sub-section">
				<div className="atelier-landing__top">
					<div className="atelier-landing__top__desc">
						{ intro.desc && <BodyText content={intro.desc} />}
					</div>
				</div>
			</section>}
			{visibleContent && <section id="portfolio" className="atelier-sub-section">
				<div className="atelier-section__inner">
					{
						visibleContent.map((post) =>
						<CommonProjectPreview
							id={post.id} 
							key={post.id} 
							{...post}
							type="atelier"
							category={post.category}
						/>)
					}
				</div>
			</section>}
		</>
	);
};

export default AtelierContent;