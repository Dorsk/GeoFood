import React, { Component } from "react";
import "../../App.css";
import myImage from "./../../img/game/cassoulet.jpg"; // Assurez-vous que l'image est dans le répertoire src
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "70%",
};

class GameContent extends Component {
  constructor(props) {
    super(props);
    this.onMapClick = this.onMapClick.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      lat: 46.3,
      lng: 1.433333,
    };
  }

  onMapClick(e) {
    this.setState((currentState) => {
      return { lat: e.latLng.lat(), lng: e.latLng.lng() };
    });
  }

  validate(e) {
    console.log("Validate");
  }

  render() {
    return (
      <div className="content-game">
        <div className=" left-side">
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 46.3, lng: 1.4333333 }}
            onClick={(e) => this.onMapClick(e)}
          >
            <Marker
              position={{
                lat: this.state.lat,
                lng: this.state.lng,
              }}
            />
          </Map>
        </div>
        <div className="col">
          <div className="row right-side">
            <img src={myImage} />
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-success"
                id="validateChoose"
                onClick={(e) => this.validate()}
                style={{ width: 200 }}
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts",
})(GameContent);
