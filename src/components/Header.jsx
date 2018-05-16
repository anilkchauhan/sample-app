import React, { Component } from 'react';
import PropTypes from 'prop-types'

let defaultProps = {
    'as' : 'h1'
}

let propTypes = {
    as: PropTypes.string
}

class Header extends Component {
    constructor(props) {
        super(props)
        console.log('Header: constructor')
        this.state = {}
    }

    componentDidMount() {
        console.log('Header: componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Header: shouldComponentUpdate')
        return true
    }

    static getDerivedStateFromProps() {
        console.log('Header: getDerivedStateFromProps')
        return null
    }

    componentDidUpdate() {
        console.log('Header: componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('Header: componentWillUnmount')
    }

    render() {
        console.log('Header: render')

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