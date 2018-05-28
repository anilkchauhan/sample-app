import React, { Component } from 'react';


class Counter extends Component {

    render() {
        let { counter, incrementCounter, decrementCounter } = this.props
        return (
            <div>
                Counter: {counter}
                <div>
                    <button onClick={incrementCounter} >INC</button>
                    <button onClick={decrementCounter} >DEC</button>
                </div>
            </div>
        )
    }
}

export default Counter