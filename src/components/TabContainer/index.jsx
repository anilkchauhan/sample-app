import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Menu from  './components/Menu'

class TabContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: props.selected
        }
    }

    onTabChangeHandler = (event, name) => {
        this.setState({
            selected: event.target.dataset.name
        })
    }

    renderMenu() {
        let { children } = this.props
        let { selected } = this.state

        let menu = React.Children.toArray(children)
           .map(child => (
                <Menu 
                  key={child.props.name} 
                  name={child.props.name} 
                  onTabClick={this.onTabChangeHandler}
                  isSelected={child.props.name === selected}
                >
                  {child.props.title}
                </Menu>
           ))

        return (
            <div>
                {menu}
            </div>
        );
    }
    
    renderSelected() {
        let { children } = this.props
        let { selected } = this.state

        let filter = React.Children.toArray(children)
           .filter(child => child.props.name === selected)

        return (
            <div>
                {filter.length && filter[0]}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderMenu()}
                {this.renderSelected()}
            </div>
        );
    }
}

export default TabContainer