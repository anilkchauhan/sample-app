import React, { Component } from 'react';

import Text from '../Text'

class Error extends Component {
    
    render() {
        
        return (
            <Text error>
                Oops, something went wrong.
            </Text>
        )
    }
}

export default Error