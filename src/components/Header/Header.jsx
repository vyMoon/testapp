import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header className='header'>
    <nav className="header__container">
      <div className='header__logo'>
        <NavLink to='/' >TESTAPP</NavLink>
      </div>
      <NavLink to='/user' className='header__user-information' >
        <p>{props.userInformation.user ? props.userInformation.user.display_name : ''}</p>
      </NavLink>
    </nav>
  </header>
)

Header.propTypes = {
  userName: PropTypes.string
}

const propMaps = ({ userInformation }) => ({
  userInformation,
})

export default connect(propMaps)(Header)
