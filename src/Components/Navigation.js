import React from 'react';
import Hamburger from './Hamburger';

export default () => {
  return (
    <div className='nav__wrapper'>
      <Hamburger />
      <img
      src='https://cdn.amcnetworks.com/sundance/logos/sundance_tv_logo.png'
      alt='network logo'/>
      <div className='nav-menu-right'>
        <div className='nav-menu-right__item'>
          SCHEDULE
        </div>
        <div className='nav-menu-right__item'>
          SUNDANCE FILM FESTIVAL
        </div>
        <div className='nav-menu-right__item'>
          SIGN IN
        </div>
      </div>
    </div>
  )
}
