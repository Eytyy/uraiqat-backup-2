import React from 'react';
import PatternChunk from '../components/patterns/PatternChunk';
import ContactAddressLineMobile from '../components/ContactAddressLineMobile';
import ContactMap from '../containers/ContactMap';
import { getNoOfChars, getWindowDimensions, getFontValues, getMaxWidth } from '../helpers';

const ContactMobile = ({ content }) => {
	const coordinates = content.fields.googleMap;
	const { addressLine1, addressLine2, mobile, telephone, fax, email } = content.fields;
	const fixedWhiteSpace = 1;
	const fixedLabelSize = 3;
	const addressLine1Config = {
		content: addressLine1,
		totalLength: addressLine1.length + fixedWhiteSpace,
	};
	const addressLine2Config = {
		content: addressLine2,
		totalLength: addressLine1.length + fixedWhiteSpace,
	};
	const telephoneConfig = {
		content: telephone,
		label: 'T:',
		totalLength: telephone.length + fixedLabelSize + fixedWhiteSpace,
	};
	const mobileConfig = {
		content: mobile,
		label: 'M:',
		totalLength: mobile.length + fixedLabelSize + fixedWhiteSpace,
	};
	const faxConfig = {
		content: fax,
		label: 'F:',
		totalLength: fax.length + fixedLabelSize + fixedWhiteSpace,
	};
	const emailConfig = {
		content: email,
		totalLength: email.length + fixedWhiteSpace,
	};

	const windowSize = getWindowDimensions();
	let maxWidth = getMaxWidth();

	const font = getFontValues();
	const getMapheight = () => {
		if (windowSize.h > 1024) {
			return 480;
		} else if (windowSize.h > 768) {
			return 390;
		}
		return 240;
	};
	const mapHeight = getMapheight();
	const config = {
		w: maxWidth,
		h: windowSize.h - (font.characterHeight * 2),
	};
	const mapConfig = {
		w: maxWidth,
		h: mapHeight,
	};

	const headerLines = 2;
	const footerLines = 3;
	const fixedNumberOfContentLines = 10;
	const minimumNumberOfLines = getNoOfChars('loading', config).y - headerLines - footerLines - fixedNumberOfContentLines;
	const numberOfEmptyLinesBeforeMap = 1;
	const mapLines= getNoOfChars('loading', mapConfig).y + numberOfEmptyLinesBeforeMap;

	const fakeArray = mapLines > minimumNumberOfLines ?
		Array(mapLines).fill('pl') :
		Array(minimumNumberOfLines).fill('pl');
	
	return (
		<section className="landing-page landing-page--contact main-section">
			<ContactAddressLineMobile type="text" config={addressLine1Config} />
			<ContactAddressLineMobile type="text" config={addressLine2Config} />
			<div className="contact-line"><PatternChunk reserved={0} /></div>
			<ContactAddressLineMobile type="tel" config={telephoneConfig} />
			<ContactAddressLineMobile type="tel" config={faxConfig} />
			<ContactAddressLineMobile type="tel" config={mobileConfig} />
			<div className="contact-line"><PatternChunk reserved={0} /></div>
			<ContactAddressLineMobile type="email" config={emailConfig} />

			{ fakeArray.map((item, index) => 
				<div key={`pl-${index}`} className="contact-line">
					<PatternChunk reserved={0} />
				</div>)
			}
			
			<div className="contact__map-wrapper">
				{ typeof window === 'undefined' ?
					null :
					<ContactMap lat={coordinates.lat} lng={coordinates.lon}/>
				}
			</div>
		</section>
	);
};

export default ContactMobile;