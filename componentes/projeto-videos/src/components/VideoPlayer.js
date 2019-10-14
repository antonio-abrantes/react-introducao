import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Channel } from '../services/EventServices';

class VideoPlayer extends Component{

  constructor(props){
    super(props);

    this.videoElement = React.createRef();

    this.currentTime = 0;

    this.toggleCinema = this.toggleCinema.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  onPlay(){
    this.videoElement.current.currentTime = this.currentTime;
  }

  onStop(){
      this.currentTime = this.videoElement.current.currentTime;
  }

  componentDidUpdate(prevProps){
    if(this.props.video.url !== prevProps.video.url){
      this.currentTime = 0;
    }
  }

  toggleCinema(){
    this.onStop();
    Channel.emit('video:toggle-cinema');
  }

  render(){
    const {container,video} = this.props;

    // if(video.url){
    //   return '';
    // }else if(!container){
    //   return 'Carregando...';
    // }else{
    //   const element = (
    //     <div className="video-player">
    //       <video 
    //         controls autoPlay loop
    //         src={video.url}
    //         ref={this.videoElement}
    //         >    
    //       </video>
    //       <button  >[]</button>
    //     </div>
    //   );
    //   return ReactDOM.createPortal(element, container);
    // }
    return(
      <div className="video-player">
        <video 
          controls autoPlay loop
          onPlay={this.onPlay}
          onPause={this.onStop}
          src={video.url}
          ref={this.videoElement}
          >    
        </video>
        <button onClick={this.toggleCinema} >[]</button>
      </div>
    ) 
  }
}

export default VideoPlayer;

/* Retorno anterior
  return(
    <div className="video-player">
      <video 
        controls autoPlay loop
        src={video.url}
        ref={this.videoElement}
        >    
      </video>
      <button  >[]</button>
    </div>
  )
*/