import React, { Component } from 'react';

import AdvertisementList from './components/AdvertisementList'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Let's all welcome Props and States</Header>
        <AdvertisementList />
      </div>
    );
  }
}

export default App;
