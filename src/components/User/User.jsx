import React from 'react';
import { connect } from 'react-redux';

class User extends React.Component {
  constructor() {
    super();
    this.onClickLogout = this.onClickLogout.bind(this);
  }
  onClickLogout() {
    console.log(this.props)
    this.props.logout();
  }
  render() {
    return (
      <>
      <h1>User {this.props.userInformation.display_name}</h1>
      <button onClick={this.onClickLogout}>logout</button>
      </>
    )
  }
}

const propsMap = ({ userInformation }) => ({
  userInformation,
});

const actionMap = (dispatch) => ({
  logout: () => dispatch({type: 'logout'})
})

export default connect(propsMap, actionMap)(User);
