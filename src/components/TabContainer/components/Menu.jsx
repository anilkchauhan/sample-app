import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Menu extends Component {
    render() {

        let {children, name, onTabClick, isSelected} = this.props
        let defaultStyle = {
            padding: "5px"
        }

        let style = isSelected ? {fontWeight: 'bold'} : {}
        
        return (
            <span data-name={name} onClick={onTabClick} style={{...defaultStyle, ...style}} >
                {children}
            </span>
        );
    }
}


export default Menu