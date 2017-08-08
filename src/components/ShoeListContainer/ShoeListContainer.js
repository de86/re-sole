import React from 'react';

class ShoeListContainer extends React.Component {
    render() {
        return (
            <div className="ShoeListContainer">
                <h3>Shoe List Container</h3>
                {
                    Object.keys(this.props.shoes.map((key) => {
                        return (
                            <h4 key={this.props.shoes[key]}>{this.props.shoes[key]}</h4>
                        );
                    })
                }
            </div>
        );
    }
}

export default ShoeListContainer;