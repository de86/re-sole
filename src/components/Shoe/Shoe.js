import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Utils from '../../resources/js/utils';

class Shoe extends React.Component {
    render() {
        const shoe = this.props.shoe;

        return (
            <Link to={`/shoe/${shoe.id}`}>
                <div className="shoe" key={ shoe.id }>
                    <h4>{ `${shoe.brand} ${shoe.model}` }</h4>
                    <img src={ require(`../../${shoe.images[0]}`) } alt={`${shoe.brand} ${shoe.model}`}/>
                    <span className="shoe-price">{ Utils.formatPrice(shoe.price) }</span>
                </div>
            </Link>
        )
    }
}

Shoe.propTypes = {
    shoe: PropTypes.object.isRequired
}

export default Shoe;
