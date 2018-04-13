'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../actions');

var _reducers = require('../reducers');

var _LoadingPattern = require('../components/patterns/LoadingPattern');

var _LoadingPattern2 = _interopRequireDefault(_LoadingPattern);

var _PatternChunk = require('../components/patterns/PatternChunk');

var _PatternChunk2 = _interopRequireDefault(_PatternChunk);

var _PatternBlock = require('../components/patterns/PatternBlock');

var _PatternBlock2 = _interopRequireDefault(_PatternBlock);

var _ContactAddressLine = require('../components/ContactAddressLine');

var _ContactAddressLine2 = _interopRequireDefault(_ContactAddressLine);

var _ContactMap = require('./ContactMap');

var _ContactMap2 = _interopRequireDefault(_ContactMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
	_inherits(Contact, _Component);

	function Contact() {
		_classCallCheck(this, Contact);

		return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	}

	_createClass(Contact, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var fetchContact = this.props.fetchContact;

			return fetchContact();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    isFetching = _props.isFetching,
			    content = _props.content;

			if (isFetching && content.length === 0 || typeof content.fields === 'undefined') {
				return _react2.default.createElement(
					'div',
					{ className: 'loader' },
					_react2.default.createElement(_LoadingPattern2.default, null)
				);
			}
			var coordinates = content.fields.googleMap;
			var _content$fields = content.fields,
			    addressLine1 = _content$fields.addressLine1,
			    addressLine2 = _content$fields.addressLine2,
			    mobile = _content$fields.mobile,
			    telephone = _content$fields.telephone,
			    fax = _content$fields.fax,
			    email = _content$fields.email;

			var addressLine1Config = {
				spaces: 4,
				content: addressLine1,
				totalLength: addressLine1.length + 4
			};
			var addressLine2Config = {
				spaces: 4,
				content: addressLine2,
				totalLength: addressLine1.length + 4
			};
			var telephoneConfig = {
				spaces: 4,
				content: telephone,
				label: 'T:',
				totalLength: telephone.length + 4 + 3
			};
			var mobileConfig = {
				spaces: 4,
				content: mobile,
				label: 'M:',
				totalLength: mobile.length + 4 + 3
			};
			var faxConfig = {
				spaces: 4,
				content: fax,
				label: 'F:',
				totalLength: fax.length + 4 + 3
			};
			var emailConfig = {
				spaces: 4,
				content: email,
				totalLength: email.length + 4
			};
			if (typeof window === 'undefined') {
				return _react2.default.createElement('section', { className: 'landing-page landing-page--contact main-section' });
			}
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
				_react2.default.createElement(_ContactAddressLine2.default, { type: 'text', config: addressLine1Config }),
				_react2.default.createElement(_ContactAddressLine2.default, { type: 'text', config: addressLine2Config }),
				_react2.default.createElement(
					'div',
					{ className: 'contact-line' },
					_react2.default.createElement(_PatternChunk2.default, { reserved: 0 })
				),
				_react2.default.createElement(_ContactAddressLine2.default, { type: 'tel', config: telephoneConfig }),
				_react2.default.createElement(_ContactAddressLine2.default, { type: 'tel', config: faxConfig }),
				_react2.default.createElement(_ContactAddressLine2.default, { type: 'tel', config: mobileConfig }),
				_react2.default.createElement(
					'div',
					{ className: 'contact-line' },
					_react2.default.createElement(_PatternChunk2.default, { reserved: 0 })
				),
				_react2.default.createElement(_ContactAddressLine2.default, { type: 'email', config: emailConfig }),
				_react2.default.createElement(_PatternBlock2.default, { reservedContent: 10 }),
				_react2.default.createElement(
					'div',
					{ className: 'contact__map-wrapper' },
					typeof window === 'undefined' ? null : _react2.default.createElement(_ContactMap2.default, { lat: coordinates.lat, lng: coordinates.lon })
				)
			);
		}
	}], [{
		key: 'fetchData',
		value: function fetchData(store) {
			return store.dispatch((0, _actions.fetchContact)());
		}
	}]);

	return Contact;
}(_react.Component);

Contact.propTypes = {
	isFetching: _propTypes2.default.bool.isRequired,
	fetchContact: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		isFetching: (0, _reducers.isContactFetching)(state),
		content: (0, _reducers.getContactContent)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ fetchContact: _actions.fetchContact }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Contact);