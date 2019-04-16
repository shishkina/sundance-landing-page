import React from 'react';
// import { Link, Router } from 'react-router-dom';

export default (props) => {
  return (
    <div className='poster__wrapper'
    style={{backgroundImage: `url(${props.images.ultrawide['2400x1080'].full})`}}>
      <img
        src={`${props.meta.amcn_field_show_branding.logo.full}`}
        alt='unspeakable show logo' />
    </div>

  )
}
