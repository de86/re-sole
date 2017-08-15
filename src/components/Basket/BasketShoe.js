import React from 'react';
import PropTypes from 'prop-types';

import Utils from '../../resources/js/utils';

class BasketShoe extends React.Component {
    constructor() {
        super()

        this.clickHandler = this.clickHandler.bind(this);
    }

    render() {
        const shoe = this.props.shoe

        return (
            <div key={ this.props.basketId } className="basket-shoe">
                <h3>{ `${shoe.brand} ${shoe.model}` }</h3>
                <img src={ require(`../../${shoe.images[0]}`) } alt={`${shoe.brand} ${shoe.model}`}/>
                <span className="shoe-price">{ Utils.formatPrice(shoe.price) }</span>
                <button onClick={ this.clickHandler }>Remove From Basket</button>
            </div>
        )
    }

    clickHandler() {
        this.props.removeFromBasket(this.props.basketId);
    }
}

BasketShoe.propTypes = {
    shoe: PropTypes.object.isRequired,
    basketId: PropTypes.string.isRequired,
    removeFromBasket: PropTypes.func.isRequired
}

export default BasketShoe;