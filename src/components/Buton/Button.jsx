import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({className, text, onClickHandler}) => (
  <button
    className={className}
    onClick={onClickHandler}
  >{text}</button>
);

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClickHandler: PropTypes.func
}

export default Button;