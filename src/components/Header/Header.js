import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {    
    return (
        <header>
            <Link to="/">
                <span className="logo">Re-Sole</span>
            </Link>
            | 
            <Link to="/basket">
                <span className="basket">Basket: { props.getBasketQuantity() }</span>
            </Link>
        </header>
    )
}

Header.propTypes = {
    getBasketQuantity: PropTypes.func.isRequired
}

export default Header;