import React, { Component } from 'react';

import getSampleData from './data/sampleData'

import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';

class App extends Component {
  constructor() {
    super();

    this.getShoes = this.getShoes.bind(this);

    const sampleData = getSampleData();

    this.state = {
      shoes: sampleData,
      visibleShoes: sampleData
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes 
          visibleShoes={ this.state.visibleShoes }
          getShoes={ this.getShoes } />
      </div>
    );
  }

  getShoes() {
    return this.state.shoes;
  }
}

export default App;
