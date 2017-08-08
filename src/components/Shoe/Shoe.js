import React from 'react';

class Shoe extends React.Component {
    render() {
        return (
            <div className="shoe" key={this.props.key}>
                <h4>{`${this.props.brand} ${this.props.model}`}</h4>
            </div>
        )
    }
}

export default Shoe;
