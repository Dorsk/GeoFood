import React, { Component } from "react";
import "../../index.css";
import GameContent from "./../game/GameContent.jsx";

class GeoFoodComponent extends Component {
  render() {
    return (
      <div style={{ "margin-left": 20 }}>
        <div>
          <h1>Geo food !</h1>
          <p>Localise le pays selon la spécialité culinaire.</p>
        </div>
        <div>
          <GameContent />
        </div>
      </div>
    );
  }
}

export default GeoFoodComponent;
