import React from 'react';
import PatternChunk from '../components/patterns/PatternChunk';
import ContactAddressLineMobile from '../components/ContactAddressLineMobile';
import ContactMap from '../containers/ContactMap';

const ContactMobile = ({ content }) => {
	const coordinates = content.fields.googleMap;
	const { addressLine1, addressLine2, mobile, telephone, fax, email } = content.fields;
	const addressLine1Config = {
		spaces: 2,
		content: addressLine1,
		totalLength: addressLine1.length + 2,
	};
	const addressLine2Config = {
		spaces: 2,
		content: addressLine2,
		totalLength: addressLine1.length + 2,
	};
	const telephoneConfig = {
		spaces: 2,
		content: telephone,
		label: 'T:',
		totalLength: telephone.length + 3 + 2,
	};
	const mobileConfig = {
		spaces: 2,
		content: mobile,
		label: 'M:',
		totalLength: mobile.length + 3 + 2,
	};
	const faxConfig = {
		spaces: 2,
		content: fax,
		label: 'F:',
		totalLength: fax.length + 3 + 2,
	};
	const emailConfig = {
		spaces: 2,
		content: email,
		totalLength: email.length + 2,
	};
	return (
		<section className="landing-page landing-page--contact main-section">
			<div className="contact-line"><PatternChunk reserved={0} /></div>
			<div className="contact-line"><PatternChunk reserved={0} /></div>
			<ContactAddressLineMobile type="text" config={addressLine1Config} />
			<ContactAddressLineMobile type="text" config={addressLine2Config} />
			<div className="contact-line"><PatternChunk reserved={0} /></div>
			<ContactAddressLineMobile type="tel" config={telephoneConfig} />
			<ContactAddressLineMobile type="tel" config={faxConfig} />
			<ContactAddressLineMobile type="tel" config={mobileConfig} />
			<div className="contact-line"><PatternChunk reserved={0} /></div>
			<ContactAddressLineMobile type="email" config={emailConfig} />
			{ Array(11).fill('pl').map(() => <PatternChunk reserved={0} />) }
			<div className="contact__map-wrapper">
				{ typeof window === 'undefined' ? null : <ContactMap lat={coordinates.lat} lng={coordinates.lon}/> }
			</div>
		</section>
	);
};

export default ContactMobile;