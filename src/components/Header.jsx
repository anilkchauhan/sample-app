import React, { Component } from 'react';
import PropTypes from 'prop-types'

let defaultProps = {
    'as' : 'h1'
}

let propTypes = {
    as: PropTypes.string
}

class Header extends Component {

    render() {
        let {children, as} = this.props

        let Type = as
        return (
            <Type>
                {children}
            </Type>
        )
    }
}
Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header