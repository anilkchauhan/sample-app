import React, { Component } from 'react';
import Header from '../Header';
import subHeading from '../../HOC/subHeading'

import randomList from '../../library/utils/randomList'
import {Advertisement as config} from '../../configs/constants'

const defaultProps = {
    'limit': config.LIMIT,
    'interval': config.INTERVAL,
    dispHeader: true
}

let SubHeader = subHeading(Header)

class Advertisement extends Component {
    constructor(props) {
        super(props)

        this.state = {
            random: Math.random()
        }

        console.log('Adv: constructor')
    }

    componentDidMount() {
        /*let { interval } = this.props;

        this.tick = setInterval(() => {
            this.setState({
                random: Math.random
            })
        }, interval)*/

        console.log('Adv: componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Adv: shouldComponentUpdate')
        return true
    }

    static getHelp() {
        console.log(';okkkkkkkk')
    }

    static getDerivedStateFromProps() {
        console.log('Adv: getDerivedStateFromProps')
        Advertisement.getHelp()
        return null
    }

    componentDidUpdate() {
        console.log('Adv: componentDidUpdate')
    }

    componentWillUnmount() {
        clearInterval(this.tick)
    }

    render() {
        console.log('Adv: render')
        let { title, columns, datas, limit, dispHeader } = this.props;
        let results = randomList(datas, limit)
        return (
            <div>
                {dispHeader && title && <SubHeader>{title}</SubHeader>}
                <table border="1" width="100%">
                    <tbody>
                    {
                        results.map(data => (
                            <tr key={data['id']}>
                                {
                                    columns.map(column => (
                                        <td key={data[column]}>
                                        { data[column] }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

Advertisement.defaultProps = defaultProps

export default Advertisement;