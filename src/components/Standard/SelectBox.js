import React from 'react';

const SelectBox = (props) => {
    console.log(props);

    return (
        <div>
            <label htmlFor={ props.name }>{props.label}</label>
            <select name={ props.name }>
                {
                    props.sizes.map((size) => {
                        return (
                            <option key={size} value={size}>{size}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default SelectBox;