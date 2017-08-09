import React from 'react';
import PropTypes from 'prop-types';

import Utils from '../../resources/js/utils';

class Shoe extends React.Component {
    render() {
        const shoe = this.props.shoe;

        return (
            <div className="shoe" key={ shoe.key }>
                <h4>{ `${shoe.brand} ${shoe.model}` }</h4>
                <img src={ require(`../../${shoe.images[0]}`) } alt={`${shoe.brand} ${shoe.model}`}/>
                <span className="shoe-price">{ Utils.formatPrice(shoe.price) }</span>
            </div>
        )
    }
}

Shoe.propTypes = {
    shoe: PropTypes.object.isRequired
}

export default Shoe;
