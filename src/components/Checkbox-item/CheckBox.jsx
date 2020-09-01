import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.scss'

const RadioButton = ({name, onChangeHandler, value, isChecked}) => {
  const labelClassName = isChecked ? 'radio-button radio-button--checked' : 'radio-button'
  return (
    <label className={labelClassName}>
      <input className="radio-button__input"
        name={name} 
        type='radio' 
        onChange={onChangeHandler}
        value={value}
        checked={isChecked}
      />
      {value}
    </label>
  )
}

RadioButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  onChangeHandler: PropTypes.func
}

export default RadioButton;
