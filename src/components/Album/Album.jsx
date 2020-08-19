import React from 'react';
import PropTypes from 'prop-types';
import './Album.scss';

const Album = ({ albumName, link, image, releaseDate, totalTracks, artists }) => (
  <div className='album'>
    <img src={image} className='album__image' alt='album'></img>
    <div className='album__information'>
      <h3 className='album__header'>
        <a href={link}>{albumName}</a>
      </h3>
        <p>Realese date: {releaseDate}</p>
        <p>Total tracks: {totalTracks}</p>
        <p>Artist: {artists.reduce((artists, el) => artists + `, ${el}`)}</p>
    </div>
  </div>
);

Album.propTypes = {
  albumName: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  releaseDate: PropTypes.string,
  totalTracks: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  artists: PropTypes.arrayOf(PropTypes.string)
}

export default Album;