import React, { Component } from 'react'

export default function (WrappedComponent) {
    return class extends Component {
        render() {
            let { children, ...rest } = this.props
            return (
                <WrappedComponent {...rest} as="h4">
                    {children}
                </WrappedComponent>
            )

        }
    }
}