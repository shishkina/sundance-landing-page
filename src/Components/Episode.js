import React from 'react';

export default (props) => {
      console.log(props.episodeData.images.ultrawide['2400x1080'].full)
  return (
    <div
    className="episode__container"
    style={{
      backgroundImage: `url(${props.episodeData.images.ultrawide['2400x1080'].full})`}}>

    </div>
  );
}
