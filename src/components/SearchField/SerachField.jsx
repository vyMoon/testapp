import React from 'react';
import PropTypes from 'prop-types';
import './SearchField.scss';

const SearchField = ({name, onChangeHandler, className}) => (
  <input 
    className={className}
    type='text'
    name={name}
    onChange={onChangeHandler}
    data-parametr={name}
  />
);

SearchField.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onChangeHandler: PropTypes.func,
}

export default SearchField;
