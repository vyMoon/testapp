import React from 'react';
import PropTypes from 'prop-types';
import './SearchField.scss';
import { connect } from 'react-redux';

const SearchField = (props) => {
  const {name, className, adString, search} = props;
  const onChenge = (event) => {
    // console.log(event.target.value);
    adString(event.target.value);
  }
  // console.log(props)
  return (
    <input 
      className={className}
      type='text'
      value={search.string}
      name={name}
      onChange={onChenge}
      data-parametr={name}
    />
  )
};

SearchField.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onChangeHandler: PropTypes.func,
}

const propsMap = ({search}) => ({
  search
})

const actionsMap = (dispatch) => ({
  adString: (string) => dispatch({type: 'string', string})
}) 

export default connect(propsMap, actionsMap)(SearchField);
