import React, {Component} from 'react'
import axios from 'axios'

export let PlanetContext = React.createContext();

export default class PlanetProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: false,
            loading: true
        }
    }

    componentDidMount() {
        axios.get(this.props.url)
        .then((response) => {
            console.log(response.data.results)
            this.setState({
                loading: false,
                data: response.data.results
            })
        }).catch(error => {
            this.setState({
                loading: false,
                error: true
            });
        })
    }

    render() {
        let {children} = this.props;
        console.log('PROVIDER', this.state)
        return (
            <PlanetContext.Provider value={this.state}>
                {children}
            </PlanetContext.Provider>
        )
    }
}
