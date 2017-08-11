import React from 'react';
import PropTypes from 'prop-types';

const SelectBox = (props) => {
    return (
        <div>
            <label htmlFor={ props.name }>{props.label}</label>
            <select name={ props.name }>
                {
                    props.values.map((value) => {
                        return (
                            <option key={value} value={value}>{value}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

SelectBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired
}

export default SelectBox;