import React, { Component } from 'react';
let ToffeeContext = React.createContext()

class ToffeeProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toffee: 'Melody',
            chocolate: 'Dairy Milk',
            onDemand: this.handleOnDemand
        }
    }

    handleOnDemand = () => {
        this.setState({
            toffee: this.state.toffee === 'Melody' ? 'Dairy Milk' : 'Melody'
        })
    }

    render() {
        let { children } = this.props
        return (
            <ToffeeContext.Provider value={this.state}>
                {children}
            </ToffeeContext.Provider>
        )
    }
}

export default class GrandFather extends Component {
    render() {
        return (
            <ToffeeProvider>
                <Father />
            </ToffeeProvider>
        )
    }
}

class Father extends Component {

    render() {
        return (
            <ToffeeContext.Consumer>
                {
                    (value) => {
                        return (
                            <div>
                                Jitendra, I too have toffee :p
                                <Child />
                            </div>
                        )
                        
                    }
                }
            </ToffeeContext.Consumer>
        )
    }
}

class Child extends Component {

    render() {
        let { toffee } = this.props
        return (
            <ToffeeContext.Consumer>
                {
                    (value) => {
                        
                        return (
                            <div>
                                Finally got my toffee: {value.toffee}
                                But I can change it as well. 
                                <button onClick={value.onDemand}>Value</button>
                            </div>
                        )
                    }
                }
            </ToffeeContext.Consumer>
        )
    }
}