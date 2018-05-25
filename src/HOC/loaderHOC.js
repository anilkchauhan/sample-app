import React, {Component} from 'react'
import axios from 'axios'

import Error from 'components/Error'
import Loading from 'components/Loading'

export default function (WrappedComponent, url, views = {}) {
    return class  extends Component {
        render() {
            console.log('STAR WAR', this.props)
            let { loading, error, ...rest } = this.props

            let loadingView = views.loading ? views.loading : <Loading />
            let errorView = views.error ? views.error : <Error />

            if(loading) {
                return loadingView
            }

            if(error) {
                return errorView
            }

            return <WrappedComponent {...rest} />
        }
    }
}