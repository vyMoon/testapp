import React from 'react';
import PropTypes from 'prop-types';
import './Album.scss';
import img from '../../assets/images/icons/no-camera.png';

const Album = ({ name, external_urls, images, release_date, total_tracks, artists }) => {
  const artist = artists.map(el => {
    return el.name
  }).join(', ')
  const imgSrc = images[0] ? images[0].url : img;
  return (
    <div className='album'>
      <img src={imgSrc} className='album__image' alt='album'></img>
      <div className='album__information'>
        <h3 className='album__header'>
          <a href={external_urls.spotify}>{name}</a>
        </h3>
          <p>Realese date: {release_date}</p>
          <p>Total tracks: {total_tracks}</p>
          <p>Artist: {artist}</p>
      </div>
    </div>
  )
};

Album.propTypes = {
  albnameumName: PropTypes.string,
  uri: PropTypes.string,
  images: PropTypes.array,
  release_date: PropTypes.string,
  total_tracks: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  artists: PropTypes.arrayOf(PropTypes.object)
}

export default Album;