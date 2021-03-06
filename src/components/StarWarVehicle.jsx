import React, { Component } from 'react';
import axios from 'axios'
import Table from './Table'

import loaderHOC from 'HOC/loaderHOC'

export class StarWarVehicleView extends Component {
    render() {
        let { data } = this.props

        return (
            <Table data={data} id="url" columns={['name', 'model', 'manufacturer']}/>
        )
    }
}

export default loaderHOC(StarWarVehicleView)

