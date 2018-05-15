import React, { Component } from 'react';

class Checkbox extends Component {

    render() {
        let { checked, onChange } = this.props
        return (
            <input type="checkbox" checked={checked} onChange={onChange} />
        )
    }
}

export default Checkbox;