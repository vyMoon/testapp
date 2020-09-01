import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
// import Album from './components/Album/Album';
// import AlbumList from './components/AlbumList/AlbumList';
// import PlayList from './components/PlayList/PlayList';
// import PlaylistsList from './components/PlaylistsList/PlaylistsList';
// import Track from './components/Track/Track';
// import TracksList from './components/TracksList/TracksList';
// import SearchFrom from './components/SearchForm/SearchForm';
// import { testAlbums, plays, tracks } from './mock';

function App(props) {
  // console.log(props)
  return (
    <>
      <Header />
      <main>
        <Main />
      </main>
    </>
  )
}

const propMaps = ({user}) => ({
  user
});

const actionsMaps = (dispatch) => ({
  login: (user) => dispatch({type: 'auth', user: user}),
  logout: () => dispatch({type: 'logout'})
})

export default connect(propMaps, actionsMaps)(App);
