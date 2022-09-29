/* eslint-disable no-undef */
// import Markers from "./marker";
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import parking from "./Assets/ParkingLogo.png";

class App extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "100%" }}
          zoom={16}
          initialCenter={{
            lat: 29.390945,
            lng: 76.963501,
          }}
        >
          {/* <Markers /> */}
          <Marker
            key="marker_1"
            //  icon={{
            // url: "",
            //   anchor: new google.maps.Point(17, 46),
            //   scaledSize: new google.maps.Size(37, 37),
            // }}
            icon={parking}
            position={{
              lat: 29.390945,
              lng: 76.963501,
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAvNL7fuRrrRMsGhw2yKyj9o6gYudGLU80",
})(App);
