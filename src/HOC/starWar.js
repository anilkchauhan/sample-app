import React, {Component} from 'react'
import axios from 'axios'

import Error from 'components/Error'
import Loading from 'components/Loading'

export default function (WrappedComponent, url, views = {}) {
    return class  extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: [],
                error: false,
                loading: true
            }
        }

        componentDidMount() {
            axios.get(url)
            .then((response) => {
                console.log(response.data.results)
                this.setState({
                    loading: false,
                    data: response.data.results
                })
            }).catch(error => {
                this.setState({
                    loading: false,
                    error: true
                });
            })
        }

        render() {
            let { loading, error, ...rest } = this.state

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