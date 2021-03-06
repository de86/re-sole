import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../resources/js/utils';

import SelectBox from '../Standard/SelectBox';

class ShoeInfo extends React.Component {
    constructor() {
        super();

        this.clickHandler = this.clickHandler.bind(this);
        this.setShoe = this.setShoe.bind(this);
        this.setSize = this.setSize.bind(this);
        this.setColour = this.setColour.bind(this);

        this.state = {
            shoe: {},
            size: null,
            colour: null
        }
    }

    componentWillMount() {
        const shoe = this.props.getShoes()[this.props.match.params.shoeId];
        this.setShoe(shoe);
        this.setSize(shoe.availSizes[0]);
        this.setColour(shoe.availColours[0]);
    }

    render() {
        const shoe = this.state.shoe;

        return (
            <div className="shoe-info">
                <h2>{ `${shoe.brand} ${shoe.model}` }</h2>
                <img
                    src={ require(`../../${shoe.images[this.state.colour]}`) }
                    alt={ `${shoe.brand} ${shoe.model}` }/>
                <span className="price">{ Utils.formatPrice(shoe.price) }</span>
                <SelectBox
                    setParentState={ this.setSize }
                    label="Shoe Size"
                    name="shoe-size"
                    values={ shoe.availSizes } />
                <SelectBox
                    setParentState={ this.setColour }
                    ref={(input) => this.colour = input}
                    label="Colour"
                    name="colour"
                    values={ shoe.availColours } />
                <button 
                    name="add-to-basket"
                    onClick={ this.clickHandler }>
                    + Add To Basket
                </button>
            </div>
        )
    }

    /*
     * Save the currently selected size in state
     */
    setSize(updatedSize) {
        let size = {...this.state.size};
        size = updatedSize;
        this.setState({ size });
    }

    /*
     * Save the currently selected colour in state
     */
    setColour(updatedColour) {
        let colour = {...this.state.colour};
        colour = updatedColour.toLowerCase();
        this.setState({ colour });
    }

    /*
     * Save the current shoe we are viewing in state
     */
    setShoe(updatedShoe) {
        let shoe = {...this.state.shoe};
        shoe = updatedShoe;
        this.setState({ shoe })
    }

    /*
     * Save the current shoe to our basket.
     * Saved in App.state.basket
     */
    clickHandler() {
        const shoe = {
            id: this.props.match.params.shoeId,
            size: this.state.size,
            colour: this.state.colour
        };

        this.props.addToBasket(shoe);
    }
}

ShoeInfo.propTypes = {
    getShoes: PropTypes.func.isRequired
}

export default ShoeInfo;