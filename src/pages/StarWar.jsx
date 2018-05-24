import React, { Component } from "react";
import StarWarVehicle from "components/StarWarVehicle";

import starWarHOC from "HOC/starWar";
import withProvider from "HOC/withProvider";

import { StarWarPlanetView, StarWarPlanetTitleView } from "components/StarWarPlanet"
import { StarWarVehicleView, StarWarVehicleTitleView } from "components/StarWarVehicle"

import { StarWar as StarWarConfig } from 'configs/constants'
import ServerError from 'components/ServerError'

import PlanetProvider, {PlanetContext} from 'provider/PlanetProvider'
import VehicleProvider, {VehicleContext} from 'provider/VehicleProvider'

let LoadingPlanetView = starWarHOC(StarWarPlanetView)
let PlanetView = withProvider(LoadingPlanetView, PlanetContext.Consumer)
let PlanetTitleView = withProvider(starWarHOC(StarWarPlanetTitleView), PlanetContext.Consumer)

let VehicleView = withProvider(starWarHOC(StarWarVehicleView), VehicleContext.Consumer)
let VehicleTitleView = withProvider(starWarHOC(StarWarVehicleTitleView, {
  error: <ServerError />
}), VehicleContext.Consumer)


class StarWar extends Component {
  render() {
    return (
      <div>
        <VehicleProvider url={StarWarConfig.VEHICLE}>
          <PlanetProvider url={StarWarConfig.PLANET}>
            This is Star War page
            <b>Vehcile</b>
            <VehicleView />
            <b>Planet</b>
            <PlanetView />
            <b>Vehcile Title</b>
            <VehicleTitleView />
            <b>Planet Title</b>
            <PlanetTitleView />
          </PlanetProvider>
        </VehicleProvider>
      </div>
    );
  }
}

export default StarWar;
