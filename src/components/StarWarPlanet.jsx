import React, { Component } from 'react';
import axios from 'axios'
import Table from './Table'

export class StarWarPlanetView extends Component {
    render() {
        let { data } = this.props

        return (
            <Table data={data} id="url" columns={['name', 'gravity', 'climate']}/>
        )
    }
}

export class StarWarPlanetTitleView extends Component {
    render() {
        let { data } = this.props

        return (
            <Table data={data} id="url" columns={['name']}/>
        )
    }
}


