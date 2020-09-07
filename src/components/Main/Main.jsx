import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// import { SpotifyApi } from '../../SpotifyApi';
import { connect } from 'react-redux';

import Authorisation from '../Authorisation/Authorisation.jsx';
import User from '../User/User';
import Music from '../Music/Music';

const Main = withRouter(class extends React.Component {
    // constructor() {
    //     super();
    //     this.api = new SpotifyApi();
    // }

    render() {
        // console.log(this.props)
        return (
            <>
            <Switch>
                <Route exact path='/' render={() => (
                    this.props.userInformation.user === null ? <Redirect to='/authorisation' /> : <Redirect to='/music' />
                )} />
                <Route path='/user' render={() => (
                    this.props.userInformation.user === null ? <Redirect to='/authorisation' /> : <User/>
                )} />
                <Route path='/music' render={() => (
                    this.props.userInformation.user ? <Music /> : <Redirect to='/authorisation' />
                )} />
                <Route path='/authorisation' render={() => (
                    this.props.userInformation.user ? <Redirect to='/music' /> : <Authorisation />
                )} />
            </Switch>
            </>
        )
    }
})

const propsMap = ({userInformation, search}) => ({
    userInformation,
    search,
});

// const actionsMap = (dispatch) => ({
//     login: (user) => dispatch({
//         type: 'user',
//         user: user,
//     }),
//     onTokens: (tokens) => dispatch({
//         type: 'tokens',
//         tokens: tokens
//     }) 
// })

export default connect(propsMap)(Main);
