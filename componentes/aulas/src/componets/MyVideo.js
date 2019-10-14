import React, { Component} from 'react';
//Acessar elementos pelo DOM com referencias

import { MyContext} from '../services/MyContext';

class MyVideo extends Component{

  static contextType = MyContext;

  constructor(props){
    super(props);

    this.myVideo = React.createRef();

    this.start = this.start.bind(this);
  }

  start(){
    this.myVideo.current.play();
  }

  render(){
    return(
      <div>
        <h3>User: {this.context.userName}</h3>
        <video ref={this.myVideo} src={this.props.src} width="300"></video>
        <button onClick={this.start}>Play</button>
      </div>
    )
  }

}

export default MyVideo;