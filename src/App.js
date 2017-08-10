import React, { Component } from 'react';

import getSampleData from './data/sampleData'

import Header from './components/Header/Header';
import ShoeListContainer from './components/ShoeListContainer/ShoeListContainer';
import ShoeInfo from './components/ShoeInfo/ShoeInfo';

class App extends Component {
  constructor() {
    super();

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
        {/*<ShoeListContainer shoes={this.state.visibleShoes} />*/}
        <ShoeInfo shoe={this.state.visibleShoes["shoe_3"]} />
      </div>
    );
  }
}

export default App;
