import React from 'react';

const SelectBox = (props) => {
    console.log(props);

    return (
        <div>
            <label htmlFor="shoe-sizes">Select Size:</label>
            <select name="shoe-sizes">
                {
                    props.sizes.map((size) => {
                        return (
                            <option key={size} value={size}>{size}</option>
                        )
                    })
                }
                {/*<option value="1">1</option>*/}
            </select>
        </div>
    );
}

export default SelectBox;