import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchContact } from '../actions';
import { isContactFetching, getContactContent } from '../reducers';

import LoadingPattern from '../components/patterns/LoadingPattern';
import PatternChunk from '../components/patterns/PatternChunk';
import PatternBlock from '../components/patterns/PatternBlock';
import ContactAddressLine from '../components/ContactAddressLine';

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
		const { addressLine1, addressLine2, mobile, telephone, fax, email } = content.fields;
		const addressLine1Config = {
			spaces: 4,
			content: addressLine1,
			contentLength: addressLine1.length,
		};
		const addressLine2Config = {
			spaces: 4,
			content: addressLine2,
			contentLength: addressLine2.length,
		};
		const telephoneConfig = {
			spaces: 4,
			content: telephone,
			contentLength: telephone.length,
		};
		const mobileConfig = {
			spaces: 4,
			content: mobile,
			contentLength: mobile.length,
		};
		const faxConfig = {
			spaces: 4,
			content: fax,
			contentLength: fax.length,
		};
		const emailConfig = {
			spaces: 4,
			content: email,
			contentLength: email.length,
		};
		return (
			<section className="landing-page landing-page--contact main-section" >
				{ typeof window === 'undefined' ? null : <div className="contact-line"><PatternChunk reserved={0} /></div>}
				{ typeof window === 'undefined' ? null : <div className="contact-line"><PatternChunk reserved={0} /></div>}
				<ContactAddressLine config={addressLine1Config} />
				<ContactAddressLine config={addressLine2Config} />
				{ typeof window === 'undefined' ? null : <div className="contact-line"><PatternChunk reserved={0} /></div>}
				<ContactAddressLine config={telephoneConfig} />
				<ContactAddressLine config={faxConfig} />
				<ContactAddressLine config={mobileConfig} />
				{ typeof window === 'undefined' ? null : <div className="contact-line"><PatternChunk reserved={0} /></div>}
				<ContactAddressLine config={emailConfig} />
				<PatternBlock reservedContent={10} />
				<div className="contact__map-wrapper">
					{ typeof window === 'undefined' ? null : <ContactMap lat={coordinates.lat} lng={coordinates.lon}/> }
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