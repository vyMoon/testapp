import React from 'react';
import PropTypes from 'prop-types';
import './PlayList.scss';

const PlayList = ({ name, link, image, totalTracks, ownerName }) => (
  <div className='playlist'>
    <div className='playlist__information'>
      <h3 className='playlist__header'>
        <a href={link}>{name}</a>
      </h3>
        <p>Owner: {ownerName}</p>
        <p>Total tracks: {totalTracks}</p>
    </div>
    <img src={image} className='playlist__image' alt='playlist'></img>
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
