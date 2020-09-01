import React from 'react';
import './App.css';
// import Main from './components/Main/Main';
import { Header } from './components/Header/Header';
import Album from './components/Album/Album';
import AlbumList from './components/AlbumList/AlbumList';
import PlayList from './components/PlayList/PlayList';
import PlaylistsList from './components/PlaylistsList/PlaylistsList';
import Track from './components/Track/Track';
import TracksList from './components/TracksList/TracksList';
import SearchFrom from './components/SearchForm/SearchForm';
import { testAlbums, plays, tracks } from './mock';

function App() {
  const number = 1;
  return (
    <>
      <Header userName={'AV'}/>
      <main>
        <AlbumList list={testAlbums} />
        <PlaylistsList list={plays}/>
        <TracksList list={tracks} />
        <SearchFrom />
      </main>
    </>
  );
}

export default App;
