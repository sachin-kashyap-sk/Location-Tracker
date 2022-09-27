import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Markers from "./marker";
class App extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "100%" }}
          zoom={10}
          initialCenter={{
            lat: 13.08268,
            lng: 80.270721,
          }}
        >
          <Markers />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAvNL7fuRrrRMsGhw2yKyj9o6gYudGLU80",
})(App);
