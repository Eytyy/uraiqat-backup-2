import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchContact } from '../actions';
import { isContactFetching, getContactContent, getAppConfigs } from '../reducers';

import LoadingPattern from '../components/patterns/LoadingPattern';
import PatternChunk from '../components/patterns/PatternChunk';
import PatternBlock from '../components/patterns/PatternBlock';
import ContactAddressLine from '../components/ContactAddressLine';
import ContactMobile from '../components/ContactMobile';

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
		const { isFetching, content, configs } = this.props;
		const { adjustForMobile } = configs;

		if (isFetching && content.length === 0 || typeof content.fields === 'undefined' ) {
			return <div className="loader"><LoadingPattern /></div>;
		}
		const coordinates = content.fields.googleMap;
		const { addressLine1, addressLine2, mobile, telephone, fax, email } = content.fields;
		const spaceBeforeAfter = 4;
		const addressLine1Config = {
			content: addressLine1,
			totalLength: addressLine1.length + spaceBeforeAfter,
		};
		const addressLine2Config = {
			content: addressLine2,
			totalLength: addressLine1.length + spaceBeforeAfter,
		};
		const telephoneConfig = {
			content: telephone,
			label: 'T:',
			totalLength: telephone.length + spaceBeforeAfter + 3,
		};
		// const mobileConfig = {
		// 	content: mobile,
		// 	label: 'M:',
		// 	totalLength: mobile.length + spaceBeforeAfter + 3,
		// };
		const faxConfig = {
			content: fax,
			label: 'F:',
			totalLength: fax.length + spaceBeforeAfter + 3,
		};
		const emailConfig = {
			content: email,
			totalLength: email.length + spaceBeforeAfter,
		};
		if (typeof window === 'undefined') {
			return <section className="landing-page landing-page--contact main-section"></section>;
		}
		if (window.innerWidth < 1024) {
			return <ContactMobile adjust={adjustForMobile} content={content} />;
		} 
		return (
			<section className="landing-page landing-page--contact main-section">
				<div className="contact-line"><PatternChunk reserved={0} /></div>
				<div className="contact-line"><PatternChunk reserved={0} /></div>
				<ContactAddressLine type="text" config={addressLine1Config} />
				<ContactAddressLine type="text" config={addressLine2Config} />
				<div className="contact-line"><PatternChunk reserved={0} /></div>
				<ContactAddressLine type="tel" config={telephoneConfig} />
				<ContactAddressLine type="tel" config={faxConfig} />
				<div className="contact-line"><PatternChunk reserved={0} /></div>
				<ContactAddressLine type="email" config={emailConfig} />
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
	content: getContactContent(state),
	configs: getAppConfigs(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchContact }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Contact);

{/* <ContactAddressLine type="tel" config={mobileConfig} /> */}
