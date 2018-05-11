import React, { Component } from 'react';
import PropTypes from 'prop-types'

let defaultProps = {
    'as' : 'h1'
}

let propTypes = {
    as: PropTypes.string,
    title: PropTypes.string
}

class Header extends Component {

    render() {
        let {title, as} = this.props

        let Type = as
        return (
            <Type>
                {title}
            </Type>
        )
    }
}
Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header