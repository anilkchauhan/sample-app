import React, { Component } from "react";
import StarWarVehicle from "components/StarWarVehicle";

import starWarHOC from "HOC/starWar";
import { StarWarPlanetView, StarWarPlanetTitleView } from "components/StarWarPlanet"
import { StarWarVehicleView, StarWarVehicleTitleView } from "components/StarWarVehicle"

import { StarWar as StarWarConfig } from 'configs/constants'
import ServerError from 'components/ServerError'

let PlanetView = starWarHOC(StarWarPlanetView, StarWarConfig.PLANET)
let PlanetTitleView = starWarHOC(StarWarPlanetTitleView, StarWarConfig.PLANET)

let VehicleView = starWarHOC(StarWarVehicleView, StarWarConfig.VEHICLE)
let VehicleTitleView = starWarHOC(StarWarVehicleTitleView, StarWarConfig.VEHICLE, {
  error: <ServerError />
})

class StarWar extends Component {
  render() {
    return (
      <div>
        This is Star War page
        <b>Vehcile</b>
        <VehicleView />
        <b>Vehcile Title</b>
        <VehicleTitleView />
        <b>Planet</b>
        <PlanetView />
        <b>Planet Title</b>
        <PlanetTitleView />

      </div>
    );
  }
}

export default StarWar;
