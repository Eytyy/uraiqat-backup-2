import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { fetchTeamMember } from '../actions';
import { getTeamMember, isTeamMemberFetching } from '../reducers';

import PostMediaImage from '../components/home/PostMediaImage';
import BodyText from '../components/BodyText';

import RelatedAuthorPosts from '../components/related/RelatedAuthorPosts';

import LoadingPattern from '../components/patterns/LoadingPattern';

class TeamMember extends Component { //eslint-disable-line
	static fetchData(store, id) {
		return store.dispatch(fetchTeamMember(id));
	}
	componentDidMount() {
		const { content, isFetching } = this.props;
		if (!isFetching && typeof content.id === 'undefined') {
			this.fetchData();
		}
	}
	fetchData() {
		const { fetchTeamMember, match } = this.props;
		const id = match.params.id;
		fetchTeamMember(id);
	}
	render() {
		const { content, isFetching } = this.props;
		const { name, profileImagevideo, role, about, instagramLink, facebookLink, personalWebsiteLink, twitterLink } = content;
		if (isFetching || typeof content.id === 'undefined') {
			return <div className="loader"><LoadingPattern /></div>;
		}
		return (
			<article className="team-member">
				<header className="team-member__header">
					{name && <h1 className="main-title team-member__title">{name}</h1>}
					{role && <h2 className="team-member__role">{role}</h2>}
				</header>
				<div className="team-member__content">
					<div className="team-member__content__col team-member__content__col--left">
						<PostMediaImage orientation="portrait" patternId="team-member" content={profileImagevideo} />
						<div className="team-member__links">
							{personalWebsiteLink && <a className="link" href={personalWebsiteLink} target="_blank">Website</a>}
							{facebookLink && <a className="link" href={facebookLink} target="_blank">Facebook</a>}
							{instagramLink && <a className="link" href={instagramLink} target="_blank">Instagram</a>}
							{twitterLink && <a className="link" href={twitterLink} target="_blank">Twitter</a>}
						</div>
					</div>
					<div className="team-member__content__col team-member__content__col--right">
						{about && <BodyText content={about} />}
					</div>
				</div>
				<aside className="related-content team-member__related">
					<RelatedAuthorPosts name={name} />
				</aside>
			</article>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { match } = ownProps;
	const id = match.params.id;
	return {
		content: getTeamMember(state, id),
		isFetching: isTeamMemberFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchTeamMember }, dispatch);

TeamMember.propTypes = {
	content: PropTypes.shape({
		id: PropTypes.string,
	}),
	isFetching: PropTypes.bool.isRequired,
	fetchTeamMember: PropTypes.func.isRequired,
};

TeamMember.defaultProps = {
	content: {},
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(TeamMember));