import React from 'react';

export default (props) => {
  return (
    <div className='poster__wrapper'
    style={{backgroundImage: `url(${props.images.ultrawide['2400x1080'].full})`}}>
      <img
        src={`${props.meta.amcn_field_show_branding.logo.full}`}
        alt='unspeakable show logo' />
      <div className='bottom-hero'>
        <h1 className='episode-title'>
          NEW: EPISODES 3 AND 4
        </h1>
        <h4 className='episode-actions'>
          <span> watch now </span>
        </h4>
      </div>
    </div>

  )
}
