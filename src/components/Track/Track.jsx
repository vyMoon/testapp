import React from 'react';
import PropTypes from 'prop-types';
import './Track.scss'

const Track = class extends React.Component {
  convertTime(ms) {
    let seconds = Math.ceil(ms / 1000);
    const minutes = Math.trunc(seconds / 60);
    seconds = `0${(seconds - (minutes * 60))}`.slice(-2);
    return `${minutes}:${seconds}`;
  }

  render() {
    const {
      name,
      external_urls,
      duration_ms,
      popularity,
      album,
      artists,
    } = this.props;

    const time = this.convertTime(duration_ms)

    return (
      <div className='track'>
        <div className="track__main-information">
          <a href={external_urls.spotify} className='track__name'>{name}</a>
          <a href={artists[0].external_urls.spotify} className='track__artist-name'>{artists[0].name}</a>
          <a href={album.external_urls.spotify} className='track__album-name'>{album.name}</a>
        </div>
        <div className="track__said-information">
          <p>duration {time}</p>
          <p>popularity {popularity}</p>
        </div>
      </div>
    )
  }
}

// Track.propTypes = {
//   trackName: PropTypes.string,
//   trackLink: PropTypes.string,
//   duration: PropTypes.string,
//   popularity: PropTypes.string,
//   albumName: PropTypes.string,
//   albumLLink: PropTypes.string,
//   artist: PropTypes.string,
//   artistLink: PropTypes.string
// }

export default Track;
