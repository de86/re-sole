import React from 'react'
import PropTypes from 'prop-types';

import BasketShoe from './BasketShoe';

class Basket extends React.Component {
    constructor() {
        super()

        this.renderShoes = this.renderShoes.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    render() {
        const basket = this.props.basket;

        return (
            <div className="basket">
                <h1>Your Basket</h1>
                { Object.keys(basket).map((this.renderShoes)) }
            </div>
        )
    }

    renderShoes(key) {
        const shoes = this.props.getShoes();
        const basket = this.props.basket;
        const shoe = shoes[basket[key].id];

        return (
            <BasketShoe
                key={ key }
                removeFromBasket={ this.props.removeFromBasket }
                shoe={ shoe }
                basketId={ key } />
        );
    }

    clickHandler() {
        console.log("Deleted");
    }
}

Basket.propTypes = {
    basket: PropTypes.object.isRequired,
    getShoes: PropTypes.func.isRequired,
    removeFromBasket: PropTypes.func.isRequired
}

export default Basket;