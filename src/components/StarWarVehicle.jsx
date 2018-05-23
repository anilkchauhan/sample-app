import React, { Component } from 'react';
import axios from 'axios'
import Table from './Table'

class StarWarVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicles: [],
            error: false,
            loading: true
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/vehicles/')
          .then((response) => {
              console.log(response.data.results)
              this.setState({
                  loading: false,
                  vehicles: response.data.results
              })
          }).catch(error => {
            this.setState({
                loading: false,
                error: true
            });
          })
    }

    render() {
        let { vehicles, loading, error } = this.state

        if(loading) {
            return <div>Loading....</div>
        }

        if(error) {
            return <div>Oops, something went wrong</div>
        }

        return (
            <Table data={vehicles} id="url" columns={['name', 'model', 'manufacturer']}/>
        )
    }
}

export default StarWarVehicle