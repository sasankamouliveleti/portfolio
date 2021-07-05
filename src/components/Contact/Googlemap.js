import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class Googlemap extends React.Component {
  render() {
    const containerStyle = {
      position: "relative",
      width: "30%",
      height: "30%",
    };

    return (
      <Map
        containerStyle={containerStyle}
        google={this.props.google}
        zoom={8}
        style={this.props.mapsstyle}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        <Marker position={{ lat: 48.0, lng: -122.0 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA1U5dMD244c6AjAudqfE2vVvSiRCQvEnU",
})(Googlemap);
