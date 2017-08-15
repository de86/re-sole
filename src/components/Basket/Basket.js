import React from 'react'
import PropTypes from 'prop-types';

import BasketShoe from './BasketShoe';

class Basket extends React.Component {
    constructor() {
        super()

        this.renderShoes = this.renderShoes.bind(this);
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

    /*
     * Render each shoe in our shopping basket
     */
    renderShoes(key) {
        const shoes = this.props.getShoes();
        const shoe = shoes[this.props.basket[key].id];
        const selectedShoe = this.props.basket[key];

        return (
            <BasketShoe
                key={ key }
                removeFromBasket={ this.props.removeFromBasket }
                shoe={ shoe }
                size={ selectedShoe.size }
                colour={ selectedShoe.colour }
                basketId={ key } />
        );
    }
}

Basket.propTypes = {
    basket: PropTypes.object.isRequired,
    getShoes: PropTypes.func.isRequired,
    removeFromBasket: PropTypes.func.isRequired
}

export default Basket;