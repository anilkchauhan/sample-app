import React, { Component } from 'react';
import axios from 'axios'
import Table from './Table'

class StarWarPlanet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [],
            error: false,
            loading: true
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/planets/')
          .then((response) => {
              console.log(response.data.results)
              this.setState({
                  loading: false,
                  planets: response.data.results
              })
          }).catch(error => {
            this.setState({
                loading: false,
                error: true
            });
          })
    }

    render() {
        let { planets, loading, error } = this.state

        if(loading) {
            return <div>Loading....</div>
        }

        if(error) {
            return <div>Oops, something went wrong</div>
        }

        return (
            <Table data={planets} id="url" columns={['name', 'gravity', 'climate']}/>
        )
    }
}

export default StarWarPlanet