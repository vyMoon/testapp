import React from 'react';
import './Artist.scss';
import img from '../../assets/images/icons/no-camera.png';

class Artist extends React.Component {
  joinGenre(genres) {

    return genres.join(', ');
  }
  render() {
    const {name, images, external_urls, genres} = this.props;
    const imgSrc = images[0] ? images[0].url : img;
    return (
      <div className="aritst-item">
        <img className="aritst-item__image" alt="arits-pic" src={imgSrc} />
        <h3 className="aritst-item__header"><a href={external_urls.spotify}>{name}</a></h3>
        
        {genres.length > 0 
          ? <>
            <h4>Genre</h4> 
            <p>{this.joinGenre(genres)}</p>
            </>
          : null
        }
        
      </div>
    )
  }
}

export default Artist; 