import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Advertisement from './components/Advertisement'
import Header from './components/Header'

import phones from './data/phone'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Let's all welcome Props and States</Header>
        <Advertisement
          datas={phones}
          columns={['name', 'brand', 'price']}
          limit="4"
        />
        <Advertisement
          datas={phones}
          title="Latest Phones"
          columns={['name', 'brand', 'price']}
        /> 
        <Advertisement
          datas={phones}
          title="Expensive Phones"
          columns={['name', 'brand', 'price']}
        /> 
      </div>
    );
  }
}

export default App;
