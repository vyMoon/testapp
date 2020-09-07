import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { connect } from 'react-redux';
import { SpotifyApi} from '../../SpotifyApi';
import './Music.scss';
import AlbumList from '../AlbumList/AlbumList';
import TrackList from '../TracksList/TracksList';
import PlaylistsList from '../PlaylistsList/PlaylistsList'
import ArtistList from '../ArtistList/ArtistList';

const Music = class extends React.Component {
  constructor(props) {
    super(props);
    this.api = new SpotifyApi();
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(event) {
    event.preventDefault();
    const { access_token } = this.props.search.userInformation.tokens;
    const { string, subject, amount } = this.props.search.search;

    this.api.getMusic(string, subject, amount, access_token)
      .then(response => {
        if (!response.error) {
          const event = {type: 'music', music: {subject: subject, data: response[`${subject}s`]}};
          this.props.addMusic(event);
        } else {
          this.props.addError(response.error);
        }
      })
  }
  render() {
    const { music, error } = this.props.search.search;
    // console.log(this.props, error)
    let Display;
    if (music.subject === 'album') {
      Display = AlbumList;
    }
    if (music.subject === 'track') {
      Display = TrackList;
    }
    if (music.subject === 'playlist') {
      Display = PlaylistsList;
    }
    if (music.subject === 'artist') {
      Display = ArtistList;
    }

    return (
      <>
      <div className="music">
        <div className="music__search">
          <h1>Music</h1>
          <SearchForm searchHandle={this.onSearch}/>
          {error.message 
            ? <p className="music__error-message">{error.message}</p>
            : null
          }
        </div>
        {music.data ? <Display list={music.data.items} /> : null }
      </div>
      </>
    )
  }
}

const propsMap = (search, userInformation) => ({
  search,
  userInformation,
})

const actionsMap = (dispatch) => ({
  addMusic: (music) => dispatch(music),
  addError: (error) => dispatch({type: 'error', error: error}),
})

export default connect(propsMap, actionsMap)(Music);