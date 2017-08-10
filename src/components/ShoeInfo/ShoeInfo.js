import React from 'react';
import PropTypes from 'prop-types';

import SelectBox from '../Standard/SelectBox';

class ShoeInfo extends React.Component {
    render() {
        const shoe = this.props.shoe;


        return (
            <div className="shoe-info">
                <h2>{`${shoe.brand} ${shoe.model}`}</h2>
                <img src={ require(`../../${shoe.images[0]}`) } alt={`${shoe.brand} ${shoe.model}`}/>
                <SelectBox sizes={shoe.availSizes} />
            </div>
        )
    }
}

ShoeInfo.propTypes = {
    shoe: PropTypes.object.isRequired
}

export default ShoeInfo;