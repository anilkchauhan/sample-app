import React, {Component} from 'react'

export default function (WrappedComponent, Consumer) {
    return class  extends Component {
        render() {
            return  (
                <Consumer>
                    {
                        (context) => {
                            return <WrappedComponent {...context} />
                        }
                    }
                    
                </Consumer>
            )
        }
    }
}