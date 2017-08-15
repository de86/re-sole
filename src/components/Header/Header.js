import React from 'react';
import { Link } from 'react-router-dom';

// THIS SHOULD BE A STATELESS COMPONENT
class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/">
                    <span className="logo">Re-Sole</span>
                </Link>
                <Link to="/basket">
                    <span className="basket">Basket: { this.props.getBasketQuantity() }</span>
                </Link>
            </header>
        )
    }
}

export default Header;