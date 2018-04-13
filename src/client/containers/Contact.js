import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchContact } from '../actions';
import { isContactFetching, getContactContent } from '../reducers';

import LoadingPattern from '../components/patterns/LoadingPattern';
import ContactMap from './ContactMap';

class Contact extends Component {
	static fetchData(store) {
		return store.dispatch(fetchContact());
	}
	componentDidMount() {
		const { fetchContact } = this.props;
		return fetchContact();
	}
	render() {
		const { isFetching, content } = this.props;
		if (isFetching && content.length === 0 || typeof content.fields === 'undefined' ) {
			return <div className="loader"><LoadingPattern /></div>;
		}
		const coordinates = content.fields.googleMap;
		return (
			<section className="landing-page landing-page--contact main-section" >
				<div className="contact__map-wrapper">
					{ typeof window === 'undefined' ?
						null : 
						<ContactMap lat={coordinates.lat} lng={coordinates.lon}/>
					}
				</div>
			</section>
		);
	}
}

Contact.propTypes = {
	isFetching:  PropTypes.bool.isRequired,
	fetchContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isFetching: isContactFetching(state),
	content: getContactContent(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchContact }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Contact);