import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class ContactMap extends React.Component {
	render() {
		const style = {
			width: '100%',
			height: '100%',
			'marginLeft': 'auto',
			'marginRight': 'auto'
		};
		const { lat, lng } = this.props;
		return (
			<Map
				item
				style = { style }
				google = { this.props.google }
				zoom = { 17 }
				initialCenter = {{ lat: lat, lng: lng }}
				mapTypeId = {'satellite'}

			>
				<Marker
					onClick = { this.onMarkerClick }
					title = { 'Uraiqat Architects' }
					position = {{ lat: lat, lng: lng }}
					name = { 'Uraiqat Architects' }
				/>
			</Map>
		);
	}
}
export default GoogleApiWrapper({
	apiKey: 'AIzaSyCU1iC35hPcwTc5IBlJrcVpeYayJDE0BIc'
})(ContactMap);
