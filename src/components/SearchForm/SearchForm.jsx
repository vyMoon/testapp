import React from 'react';
import './SearchForm.scss';
// import RadioButton from '../Checkbox-item/CheckBox';
import SearchField from '../SearchField/SerachField';
import ButtonsList from '../ButtonsList/ButtonsList';
import Button from '../Buton/Button';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   search: '',
    //   type: 'artist',
    //   amount: '20'
    // }

    this.typeButtons = ['artist', 'album', 'playlist', 'track'];
    this.amountButtons = ['20', '30', '40', '50'];

    // this.onChange = this.onChange.bind(this);
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
  }

  // onChange(event) {
  //   // console.log(event.target)
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  onClickSearchButton(event) {
    event.preventDefault();
    console.log('search', this.state);
  }

  render() {
    // console.log(this.state)
    return (
      <>
        <form className='search-form'>
          <div className="searh-from__container">
            <SearchField 
              className="search-form__input-field"
              name='search' 
              onChangeHandler={this.onChange}
            />
            <Button 
              className="search-form__button"
              text='Search'
              onClickHandler={this.props.searchHandle}
            />
          </div>
          <ButtonsList 
            name='subject'
            buttonsList={this.typeButtons}
            // onChangeHandler={this.onChange}
            // checkedValue={this.state.type}
            header='Subject'
          />
          <ButtonsList 
            name='amount'
            buttonsList={this.amountButtons}
            // onChangeHandler={this.onChange}
            // checkedValue={this.state.amount}
            header='Amount'
          />
        </form>
      </>
    )
  }
}