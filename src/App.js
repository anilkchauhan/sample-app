import React, { Component } from 'react';

import AdvertisementList from './components/AdvertisementList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Let's all welcome Props and States</h1>
        <AdvertisementList />
      </div>
    );
  }
}

export default App;
