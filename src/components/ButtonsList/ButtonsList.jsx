import React from 'react';
import RadioButton from '../Checkbox-item/CheckBox';
import PropTypes from 'prop-types';
import './ButtonsList.scss';

const ButtonsList = ({ buttonsList, name, onChangeHandler, checkedValue, header }) => (
  <div className='buttons-list'>
    <h4 className='buttons-list__header'>{header}</h4>
    {buttonsList.map(el => {
       return <RadioButton 
        key={el}
        name={name}
        value={el}
        onChangeHandler={onChangeHandler}
        isChecked={checkedValue === el}
       />
    })}
  </div>
);

ButtonsList.propTypes = {
  buttonsList: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  onChangeHandler: PropTypes.func,
  checkedValue: PropTypes.string,
  header: PropTypes.string
}

export default ButtonsList;