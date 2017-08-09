import React from 'react';
import PropTypes from 'prop-types';

class ShoeInfo extends React.Component {
    render() {
        const shoe = this.props.shoe;


        return (
            <div className="shoe-info">
                <h2>{shoe.brand}</h2>
            </div>
        )
    }
}

ShoeInfo.propTypes = {
    shoe: PropTypes.object.isRequired
}

export default ShoeInfo;