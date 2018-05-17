import React, { Component } from 'react';
import Advertisement from './Advertisement'
import Setting from './components/Setting'
import {Advertisement as config} from '../../configs/constants'

import phones from '../../data/phone'

class AdvertisementList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            limit: config.LIMIT,
            dispHeader: true
        }

        console.log('Adv LIST: constructor')
    }

    handleOnLimitChange = (event) => {
        this.setState({
            limit: event.target.value
        })
    }

    handleOnHeaderChange = (event) => {
        this.setState({
            dispHeader: event.target.checked
        })
    }

    componentDidMount() {
        console.log('Adv LIST: componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Adv LIST: shouldComponentUpdate')
        return true
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Adv LIST: getDerivedStateFromProps')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Adv LIST: componentDidUpdate')
    }

    render() {
        let { limit, dispHeader } = this.state
        console.log('Adv LIST: render')
        return (
            <div>
                <Setting 
                    limit={limit} 
                    onLimitChange={this.handleOnLimitChange}  
                    dispHeader={dispHeader} 
                    onHeaderChange={this.handleOnHeaderChange}  
                />
                <Advertisement
                    datas={phones}
                    title="Top Phones"
                    columns={['name', 'brand', 'price']}
                    limit={limit}
                    dispHeader={dispHeader}
                />
                <Advertisement
                    datas={phones}
                    title="Top Phones"
                    columns={['name', 'brand', 'price']}
                    limit={limit}
                    dispHeader={dispHeader}
                />
            </div>
        );
    }
}


export default AdvertisementList;