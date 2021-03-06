import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Utils from '../../resources/js/utils';

// THIS SHOULD BE A STATELESS COMPONENT
const Shoe = (props) => {
    const shoe = props.shoe;

    return (
        <Link to={`/shoe/${shoe.id}`}>
            <div className="shoe" key={ shoe.id }>
                <h4>{ `${shoe.brand} ${shoe.model}` }</h4>
                <img src={ require(`../../${shoe.images["default"]}`) } alt={`${shoe.brand} ${shoe.model}`}/>
                <span className="shoe-price">{ Utils.formatPrice(shoe.price) }</span>
            </div>
        </Link>
    )
}

Shoe.propTypes = {
    shoe: PropTypes.object.isRequired
}

export default Shoe;
