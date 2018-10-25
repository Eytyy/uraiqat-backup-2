import React from 'react';
import PostContentText from './PostContentText';
import PostContentMedia from './PostContentMedia';
import PostContentYoutube from './PostContentYoutube';
import PostContentSubtitle from './PostContentSubtitle';

const PostContent = ({ content }) => {
	return (<div className="post__content">
		{
			content.map(({ sys, fields}) => {
				switch(sys.contentType.sys.id) {
				case 'blockPostText':
					return <PostContentText key={sys.id} content={fields} />;
				case 'blockPostMedia':
					return <PostContentMedia key={sys.id} id={sys.id} content={fields} />;
				case 'blockPostYoutubeEmbed':
					return <PostContentYoutube key={sys.id} id={sys.id} content={fields} />;
				default: 
					return <PostContentSubtitle key={sys.id} content={fields} />;
				}
			})
		}
	</div>);
};

export default PostContent;