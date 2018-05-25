import React, {Component} from 'react'

export default function (Consumer) {
    return function(WrappedComponent) {
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
}