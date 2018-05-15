import React, { Component } from 'react';

class Text extends Component {

    render() {
        let { value, onChange } = this.props
        return (
            <input type="text" value={value} onChange={onChange} />
        )
    }
}

export default Text;