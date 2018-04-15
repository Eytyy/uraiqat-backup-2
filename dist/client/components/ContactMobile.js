'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PatternChunk = require('../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

var _ContactAddressLineMobile = require('../components/ContactAddressLineMobile');

var _ContactAddressLineMobile2 = _interopRequireDefault(_ContactAddressLineMobile);

var _ContactMap = require('../containers/ContactMap');

var _ContactMap2 = _interopRequireDefault(_ContactMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactMobile = function ContactMobile(_ref) {
	var content = _ref.content;

	var coordinates = content.fields.googleMap;
	var _content$fields = content.fields,
	    addressLine1 = _content$fields.addressLine1,
	    addressLine2 = _content$fields.addressLine2,
	    mobile = _content$fields.mobile,
	    telephone = _content$fields.telephone,
	    fax = _content$fields.fax,
	    email = _content$fields.email;

	var addressLine1Config = {
		spaces: 2,
		content: addressLine1,
		totalLength: addressLine1.length + 2
	};
	var addressLine2Config = {
		spaces: 2,
		content: addressLine2,
		totalLength: addressLine1.length + 2
	};
	var telephoneConfig = {
		spaces: 2,
		content: telephone,
		label: 'T:',
		totalLength: telephone.length + 3 + 2
	};
	var mobileConfig = {
		spaces: 2,
		content: mobile,
		label: 'M:',
		totalLength: mobile.length + 3 + 2
	};
	var faxConfig = {
		spaces: 2,
		content: fax,
		label: 'F:',
		totalLength: fax.length + 3 + 2
	};
	var emailConfig = {
		spaces: 2,
		content: email,
		totalLength: email.length + 2
	};
	return _react2.default.createElement(
		'section',
		{ className: 'landing-page landing-page--contact main-section' },
		_react2.default.createElement(
			'div',
			{ className: 'contact-line' },
			_react2.default.createElement(_PatternChunk2.default, { reserved: 0 })
		),
		_react2.default.createElement(
			'div',
			{ className: 'contact-line' },
			_react2.default.createElement(_PatternChunk2.default, { reserved: 0 })
		),
		_react2.default.createElement(_ContactAddressLineMobile2.default, { type: 'text', config: addressLine1Config }),
		_react2.default.createElement(_ContactAddressLineMobile2.default, { type: 'text', config: addressLine2Config }),
		_react2.default.createElement(
			'div',
			{ className: 'contact-line' },
			_react2.default.createElement(_PatternChunk2.default, { reserved: 0 })
		),
		_react2.default.createElement(_ContactAddressLineMobile2.default, { type: 'tel', config: telephoneConfig }),
		_react2.default.createElement(_ContactAddressLineMobile2.default, { type: 'tel', config: faxConfig }),
		_react2.default.createElement(_ContactAddressLineMobile2.default, { type: 'tel', config: mobileConfig }),
		_react2.default.createElement(
			'div',
			{ className: 'contact-line' },
			_react2.default.createElement(_PatternChunk2.default, { reserved: 0 })
		),
		_react2.default.createElement(_ContactAddressLineMobile2.default, { type: 'email', config: emailConfig }),
		Array(11).fill('pl').map(function () {
			return _react2.default.createElement(_PatternChunk2.default, { reserved: 0 });
		}),
		_react2.default.createElement(
			'div',
			{ className: 'contact__map-wrapper' },
			typeof window === 'undefined' ? null : _react2.default.createElement(_ContactMap2.default, { lat: coordinates.lat, lng: coordinates.lon })
		)
	);
};

exports.default = ContactMobile;