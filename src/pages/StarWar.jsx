import React, { Component } from "react";
import StarWarVehicle from "components/StarWarVehicle";

import loaderHOC from "HOC/loaderHOC";
import withContext from "HOC/withContext";

import StarWarPlanetView from "components/StarWarPlanet"
import StarWarVehicleView from "components/StarWarVehicle"

import StarWarPlanetTitleView from "components/StarWarPlanetTitle"
import StarWarVehicleTitleView from "components/StarWarVehicleTitle"

import { StarWar as StarWarConfig } from 'configs/constants'
import ServerError from 'components/ServerError'

import PlanetProvider, {PlanetContext} from 'provider/PlanetProvider'
import VehicleProvider, {VehicleContext} from 'provider/VehicleProvider'

let PlanetView = withContext(PlanetContext.Consumer)(StarWarPlanetView)
let PlanetTitleView = withContext(PlanetContext.Consumer)(StarWarPlanetTitleView)

let VehicleView = withContext(VehicleContext.Consumer)(StarWarVehicleView)
let VehicleTitleView = withContext(VehicleContext.Consumer)(StarWarVehicleTitleView)


class StarWar extends Component {
  render() {
    return (
      <div>
        <VehicleProvider url={StarWarConfig.VEHICLE}>
          <PlanetProvider url={StarWarConfig.PLANET}>
            This is Star War page
            <b>Vehcile</b>
            <VehicleView />
            <b>Vehcile Title</b>
            <VehicleTitleView />
            
            <b>Planet</b>
            <PlanetView />
            
            <b>Planet Title</b>
            <PlanetTitleView />
          </PlanetProvider>
        </VehicleProvider>
      </div>
    );
  }
}

export default StarWar;
