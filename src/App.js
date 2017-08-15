import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import shortid from 'shortid';

import getSampleData from './data/sampleData'

import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';

class App extends Component {
  constructor() {
    super();

    this.getShoes = this.getShoes.bind(this);
    this.setVisibleShoes = this.setVisibleShoes.bind(this);
    this.getBasketQuantity = this.getBasketQuantity.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
    this.removeFromBasket = this.removeFromBasket.bind(this);

    const sampleData = getSampleData();

    this.state = {
      shoes: sampleData,
      visibleShoes: sampleData,
      basket: {}
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

  getBasketQuantity() {
    return Object.keys(this.state.basket).length;
  }

  addToBasket(shoe) {
    let basket = { ...this.state.basket };
    const basketItemId = `item-${shortid.generate()}`

    basket[basketItemId] = shoe;
    this.setState({ basket });
  }

  removeFromBasket(basketId) {
    let basket = this.state.basket;
    delete basket[basketId];
    this.setState({ basket });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header getBasketQuantity={ this.getBasketQuantity } />
          <Routes
            basket={ this.state.basket }
            visibleShoes={ this.state.visibleShoes }
            getShoes={ this.getShoes }
            setVisibleShoes={ this.setVisibleShoes }
            addToBasket={ this.addToBasket }
            removeFromBasket={ this.removeFromBasket } />
        </div>
      </Router>
    );
  }
}

export default App;
