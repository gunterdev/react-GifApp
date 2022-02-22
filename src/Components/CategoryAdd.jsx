import { TextField } from '@mui/material'
import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CategoryAdd = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(setCategory === undefined) return;
        if(inputValue.trim().length < 2) return;
        setCategory(inputValue);
        setInputValue('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Add Category"
            color='primary'
            fullWidth={true}
            type='test'
            onChange={(e) => handleInputChange(e)}
            value={inputValue}
        />
    </form>
  )
}

CategoryAdd.propTypes = {
    setCategory: PropTypes.func.isRequired,
}

export default CategoryAdd