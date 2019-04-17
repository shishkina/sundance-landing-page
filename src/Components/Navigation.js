import React, { Component } from 'react';


class Navigation extends Component {
  state = {
    status: 'collapsed'
  }

  handleExpandHamburgerMenu() {

  }
  render() {
    return (
      <div className='nav__wrapper'>
        <img onClick={this.handleExpandHamburgerMenu}
          src='http://chittagongit.com/images/hamburger-icon-white/hamburger-icon-white-16.jpg'
          alt="Open hamburger menu"
          className='hamburger__icon'
        />
        <img
        src='https://cdn.amcnetworks.com/sundance/logos/sundance_tv_logo.png'
        alt='network logo'/>
        <div className='nav-menu-right'>
          <div className='nav-menu-right__item'>
            <a href="https://www.sundancetv.com/schedule"> SCHEDULE </a>
          </div>
          <div className='nav-menu-right__item'>
             <a href="https://www.sundancetv.com/festival"> SUNDANCE FILM FESTIVAL </a>
          </div>
          <div className='nav-menu-right__item'>
            <a href="https://www.sundancetv.com/signin"> SIGN IN </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;
