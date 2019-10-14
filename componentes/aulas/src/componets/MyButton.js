import React, { Component} from 'react';
import Time from '../componets/Time';

class MyButton extends Component{

  constructor(props){
    super(props);
    this.state={
      isOn: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this);
    this.setState((state, props)=> {
      return {isOn: !state.isOn};
    });
  }

  sayHello(event){
    event.preventDefault();
    alert("Hello!!");
  }

  render(){
    const {state} = this;
    return(
      <div>
         {/* <button onClick={this.handleClick}>{state.isOn ? "LIGADO":"DESLIGADO"}</button>
        Passando parametros
      <button onClick={(event)=>{ this.handleClick(event)}}>{state.isOn ? "LIGADO":"DESLIGADO"}</button> */}
      <button onClick={this.handleClick.bind(this, 25)}>{state.isOn ? "LIGADO":"DESLIGADO"}</button>
      {state.isOn ? <Time></Time> : "OFF"}
      </div>
    )
  }
}


export default MyButton;