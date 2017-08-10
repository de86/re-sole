import React from 'react';
import PropTypes from 'prop-types';

import Shoe from '../Shoe/Shoe';

class ShoeListContainer extends React.Component {
    constructor() {
        super();

        this.renderShoes = this.renderShoes.bind(this);
    }

    render() {
        return (
            <div className="ShoeListContainer">
                <h3>Shoe List Container</h3>
                { Object.keys(this.props.shoes).map((this.renderShoes)) }
            </div>
        );
    }

    renderShoes(key) {
        const shoe = this.props.shoes[key];

        return (
            <Shoe key={shoe.id} shoe={shoe} />
        );
    }
}

ShoeListContainer.propTypes = {
    shoes: PropTypes.object.isRequired
}

export default ShoeListContainer;