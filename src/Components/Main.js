import React from 'react';
import Episode from './Episode';


export default (props) => {
  return (
    <div className="episodes__wrapper">
    <div className="content-list-top">
      <button> season 1 </button>
      <button> episodes </button>  
    </div>
    {props.episodesData.map((episodeData) =>
      <Episode
      episodeData={episodeData}
      key={episodeData.id}/>
    )}
    </div>
  );
}
