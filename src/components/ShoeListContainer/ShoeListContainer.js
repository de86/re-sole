import React from 'react';
import PropTypes from 'prop-types';

import FiltersContainer from '../Filters/FiltersContainer';
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
                <FiltersContainer />
                { Object.keys(this.props.visibleShoes).map((this.renderShoes)) }
            </div>
        );
    }

    renderShoes(key) {
        const shoe = this.props.visibleShoes[key];

        return (
            <Shoe key={shoe.id} shoe={shoe} />
        );
    }
}

ShoeListContainer.propTypes = {
    visibleShoes: PropTypes.object.isRequired
}

export default ShoeListContainer;