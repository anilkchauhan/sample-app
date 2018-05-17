import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Tab extends Component {
    render() {

        let {children} = this.props
        return (
            <div>
                {children}
            </div>
        );
    }
}


export default Tab