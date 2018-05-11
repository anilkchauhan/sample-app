import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Advertisement from './components/Advertisement'
import phones from './data/phone'

import {Advertisement as config} from './configs/constants'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Let's all welcome Props and States</h1>
        <Advertisement 
          datas={phones} 
          title="Top Phones" 
          columns={['name', 'brand', 'price']} 
          limit={config.LIMIT}
          interval={config.INTERVAL}
        />
      </div>
    );
  }
}

export default App;
