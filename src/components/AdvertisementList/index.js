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

    render() {
        let { limit, dispHeader } = this.state
        console.log(limit, dispHeader)
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
                />
        
                <Advertisement
                    datas={phones}
                    title="Expensive Phones (Default)"
                    columns={['name', 'brand', 'price']}
                /> 
            </div>
        );
    }
}


export default AdvertisementList;