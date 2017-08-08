import React, { Component } from 'react';

import getSampleData from './data/sampleData'

import Header from './components/Header/Header';
import ShoeListContainer from './components/ShoeListContainer/ShoeListContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      shoes: {},
      visibleShoes: {}
    };
  }

  componentDidMount() {
    const sampleData = getSampleData();

    this.setState({
      shoes: sampleData
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ShoeListContainer shoes={this.state.shoes}/>
      </div>
    );
  }
}

export default App;
