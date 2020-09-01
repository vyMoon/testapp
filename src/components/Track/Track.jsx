import React from 'react';
import PropTypes from 'prop-types';
import './Track.scss'

const Track = ({
  trackName,
  trackLink,
  duration,
  popularity,
  albumName,
  albumLLink,
  artist,
  artistLink,
}) => (
  <div className='track'>
    <div className="track__main-information">
      <a href={trackLink} className='track__name'>{trackName}</a>
      <a href={artistLink} className='track__artist-name'>{artist}</a>
      <a href={albumLLink} className='track__album-name'>{albumName}</a>
    </div>
    <div className="track__said-information">
      <p>duration {duration}</p>
      <p>popularity {popularity}</p>
    </div>
  </div>
);

Track.propTypes = {
  trackName: PropTypes.string,
  trackLink: PropTypes.string,
  duration: PropTypes.string,
  popularity: PropTypes.string,
  albumName: PropTypes.string,
  albumLLink: PropTypes.string,
  artist: PropTypes.string,
  artistLink: PropTypes.string
}

export default Track;
