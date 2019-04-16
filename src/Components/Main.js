import React from 'react';
import Episode from './Episode';


export default (props) => {
  return (
    <div className="episode__wrapper">
    {props.episodesData.map((episodeData) =>
      <Episode
      episodeData={episodeData}
      key={episodeData.id}/>
    )}
    </div>
  );
}
