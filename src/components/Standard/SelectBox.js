import React from 'react';
import PropTypes from 'prop-types';

class SelectBox extends React.Component {
    constructor() {
        super();

        this.updateParentState = this.updateParentState.bind(this);
    }
    
    render() {
        return (
            <div>
                <label htmlFor={ this.props.name }>{this.props.label}</label>
                <select
                    ref={(input) => this.input = input}
                    name={ this.props.name }
                    onChange={ this.updateParentState }>
                    {
                        this.props.values.map((value) => {
                            return (
                                <option key={value} value={value}>{value}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }

    updateParentState() {
        const selectedValue = this.input.selectedOptions[0].value;

        this.props.setParentState(selectedValue);
    }
}

SelectBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    setParentState: PropTypes.func.isRequired
}

export default SelectBox;