import React from 'react';

import { Channel } from '../services/EventServices';

function VideoList(props){

  const videos = props.videos || [];

  function handleClick(video){
    Channel.emit('video:select', video)
  }

  return (
    <ul className="video-list">
      {
        videos.map(video => (
          <li key={video.id} className="video" onClick={handleClick.bind(this, video)}>
            <img  src={video.img} alt={video.name}></img>
            <div>{video.name}</div>
          </li>
        ))
      }
    </ul>
  )
}

export default VideoList;


//Videos by https://coverr.co/