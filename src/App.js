import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import getSampleData from './data/sampleData'

import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';

class App extends Component {
  constructor() {
    super();

    this.getShoes = this.getShoes.bind(this);
    this.setVisibleShoes = this.setVisibleShoes.bind(this);

    const sampleData = getSampleData();

    this.state = {
      shoes: sampleData,
      visibleShoes: sampleData
    };
  }

  getShoes() {
    return this.state.shoes;
  }

  getVisibleShoes() {
    return this.state.visibleShoes;
  }

  setVisibleShoes(updatedVisibleShoes) {
    let visibleShoes = {...this.state.visibleShoes}
    visibleShoes = updatedVisibleShoes;
    this.setState = { visibleShoes }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes 
            visibleShoes={ this.state.visibleShoes }
            getShoes={ this.getShoes }
            setVisibleShoes={ this.setVisibleShoes } />
        </div>
      </Router>
    );
  }

  
}

export default App;
