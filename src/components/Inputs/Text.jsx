import React, { Component } from 'react';
import styled from 'styled-components'
class Text extends Component {

    render() {
        let { value, onChange, className} = this.props
        return (
            <input className={className} type="text" value={value} onChange={onChange} />
        )
    }
}

export default styled(Text)`
font-size: 18px
`;