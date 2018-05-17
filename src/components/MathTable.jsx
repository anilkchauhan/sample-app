import React, { Component } from 'react';
import PropTypes from 'prop-types'

let defaultProps = {
    'number' : 0,
    'times'  : 10
}

let propTypes = {
    number: PropTypes.number,
    times: PropTypes.number
}

class MathTable extends Component {
    render() {

        let { times, number, children } = this.props

        console.log(children)
        let items = [];
        for(let counter = 1; counter <= times; counter++) {
            items.push(children(number, counter))
        }
        console.log(items)
        return items;
    }
}
MathTable.defaultProps = defaultProps;
MathTable.propTypes = propTypes;

export default MathTable