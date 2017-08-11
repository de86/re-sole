import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <Link to="/">
                <header>
                    <span className="logo">Re-Sole</span>
                </header>
            </Link>
        )
    }
}

export default Header;