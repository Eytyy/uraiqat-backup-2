'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _googleMapsReact = require('google-maps-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactMap = function (_React$Component) {
	_inherits(ContactMap, _React$Component);

	function ContactMap() {
		_classCallCheck(this, ContactMap);

		return _possibleConstructorReturn(this, (ContactMap.__proto__ || Object.getPrototypeOf(ContactMap)).apply(this, arguments));
	}

	_createClass(ContactMap, [{
		key: 'render',
		value: function render() {
			var style = {
				width: '100%',
				height: '100%',
				'marginLeft': 'auto',
				'marginRight': 'auto'
			};
			var _props = this.props,
			    lat = _props.lat,
			    lng = _props.lng;

			return _react2.default.createElement(
				_googleMapsReact.Map,
				{
					item: true,
					style: style,
					google: this.props.google,
					zoom: 17,
					initialCenter: { lat: lat, lng: lng },
					mapTypeId: 'satellite'

				},
				_react2.default.createElement(_googleMapsReact.Marker, {
					onClick: this.onMarkerClick,
					title: 'Uraiqat Architects',
					position: { lat: lat, lng: lng },
					name: 'Uraiqat Architects'
				})
			);
		}
	}]);

	return ContactMap;
}(_react2.default.Component);

exports.default = (0, _googleMapsReact.GoogleApiWrapper)({
	api: 'AIzaSyCU1iC35hPcwTc5IBlJrcVpeYayJDE0BIc'
})(ContactMap);