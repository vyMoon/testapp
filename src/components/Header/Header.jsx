import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ userName }) => (
  <header className='header'>
    <nav className="header__container">
      <div className='header__logo'>
        <a href="http://localhost:3000">TESTAPP</a>
      </div>
      <a href='http://localhost:3000/user' className='header__user-information'>
        <p>{userName}</p>
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  userName: PropTypes.string
}

export { Header };
