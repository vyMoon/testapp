import React from 'react';
import RadioButton from '../Checkbox-item/CheckBox';
import PropTypes from 'prop-types';
import './ButtonsList.scss';
import { connect } from 'react-redux';

const ButtonsList = (props) => {
  const { buttonsList, name, changeField, checkedValue, header } = props;
  // console.log(props)
  const onChange = (event) => {
    // console.log(event.target.value, name);
    changeField({type: name, value: event.target.value});
  }
  return (
    <div className='buttons-list'>
      <h4 className='buttons-list__header'>{header}</h4>
      {buttonsList.map(el => {
        return <RadioButton 
          key={el}
          name={name}
          value={el}
          onChangeHandler={onChange}
          isChecked={props.search[name] === el}
        />
      })}
    </div>
  )
};

ButtonsList.propTypes = {
  buttonsList: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  onChangeHandler: PropTypes.func,
  checkedValue: PropTypes.string,
  header: PropTypes.string
}

const propsMap = ({search}) => ({
  search
});

const actionMap = (dispatch) => ({
  changeField: (action) => dispatch(action)
})

export default connect(propsMap, actionMap)(ButtonsList);