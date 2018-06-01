import React, { Component } from 'react';
import { BiggerBolderText } from './Text'


class Loading extends Component {
    
    render() {
        
        return (
            <BiggerBolderText warning size={20}>
                Loading....
            </BiggerBolderText>
        )
    }
}

export default Loading