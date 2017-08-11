import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../resources/js/utils';

import SelectBox from '../Standard/SelectBox';

class ShoeInfo extends React.Component {
    render() {
        const shoeId = this.props.match.params.shoeId;
        const shoe = this.props.getShoes()[shoeId];

        return (
            <div className="shoe-info">
                <h2>{`${shoe.brand} ${shoe.model}`}</h2>
                <img src={ require(`../../${shoe.images[0]}`) } alt={`${shoe.brand} ${shoe.model}`}/>
                <span className="price">{ Utils.formatPrice(shoe.price) }</span>
                <SelectBox label="Shoe Size" name="shoe-size" values={shoe.availSizes} />
                <SelectBox label="Colour" name="colour" values={shoe.availColours} />
                <button name="add-to-basket">+ Add To Basket</button>
            </div>
        )
    }
}

ShoeInfo.propTypes = {
    getShoes: PropTypes.func.isRequired
}

export default ShoeInfo;