import React from 'react';
import PropTypes from 'prop-types';
import './PlayList.scss';

const PlayList = ({ name, external_urls, images, tracks, owner }) => (
  <div className='playlist'>
    <div className='playlist__information'>
      <h3 className='playlist__header'>
        <a href={external_urls.spotify}>{name}</a>
      </h3>
        <p>Owner: {owner.display_name}</p>
        <p>Total tracks: {tracks.total}</p>
    </div>
    <img src={images[0].url} className='playlist__image' alt='playlist'></img>
  </div>
);

PlayList.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  totalTracks: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ownerName: PropTypes.string
}

export default PlayList;
