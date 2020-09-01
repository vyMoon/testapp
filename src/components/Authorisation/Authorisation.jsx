import React from 'react';
import { withRouter } from 'react-router-dom';
import { SpotifyApi } from '../../SpotifyApi';
import { connect } from 'react-redux';

import './Authorisation.scss'

const Authorisation = withRouter(class extends React.Component {
  constructor() {
    super();
    this.api = new SpotifyApi();
  }

  componentDidMount() {
    // console.log('didmount aurh', this.props)
    const search = this.props.location.search;
    const code = search && search.includes('code') ? search.split('=')[1] : null;
    let credentialsToState;
    // console.log(code)

    if (code) {
      // console.log(code)
      this.api.getAccessToken(code)
        .then(credentials => {
          if (credentials.access_token) {
            // console.log(credentials)
            credentialsToState = credentials;
            return this.api.getUserInformation(credentials.access_token);
          }
        })
        .then(userInformation => {
          // console.log(userInformation, credentialsToState);
          if (userInformation && credentialsToState) {
            this.props.login(userInformation);
            this.props.onTokens(credentialsToState);
          }
        });
    }
  }

  render() {
    return (
      <div className="authorisation__container">
        <a className="authorisation__link" href={this.api.authLink}>connect to spotify</a>
      </div>
      
    )
  }
})

const propsMap = ({userInformation}) => ({
  userInformation,
  // tokens
});

const actionsMap = (dispatch) => ({
  login: (user) => dispatch({
      type: 'user',
      user: user,
  }),
  onTokens: (tokens) => dispatch({
      type: 'tokens',
      tokens: tokens
  }) 
})

export default connect(propsMap, actionsMap)(Authorisation);
