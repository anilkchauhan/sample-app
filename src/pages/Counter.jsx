import React, { Component } from 'react';
import { connect } from 'react-redux'

import { selectors, operations } from 'state/ducks/counter'

class Counter extends Component {
    incCounter = (e) => {
        this.props.incrementCounter(5)
    }

    render() {
        let { counter, decrementCounter } = this.props
        return (
            <div>incrementCounter
                Counter: {counter}
                <div>
                    <button onClick={this.incCounter} >
                      INC
                    </button>
                    <button onClick={() => (decrementCounter())} >DEC</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        counter: selectors.getCounter(state)
    }
}

const mapDispatchToProps = {
    incrementCounter: operations.incrementCounter,
    decrementCounter: operations.decrementCounter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)