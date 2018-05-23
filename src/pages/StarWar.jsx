import React, { Component } from "react";
import StarWarVehicle from "components/StarWarVehicle";
import StarWarPlanet from "components/StarWarPlanet";

class StarWar extends Component {
  render() {
    return (
      <div>
        This is Star War page
        <StarWarVehicle />
        <StarWarVehicle />
        <StarWarVehicle />
        <StarWarPlanet />
        <StarWarPlanet />
        <StarWarPlanet />
      </div>
    );
  }
}

export default StarWar;
