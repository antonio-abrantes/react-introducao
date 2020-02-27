import React, { Component } from 'react'
import './estilo.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            btVaiText: "VAI"
        }

        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.btVaiText = "VAI";
            this.setState(state);
        }else{
            this.timer = setInterval(()=>{
                state.numero += 0.01;
                this.setState(state);
            }, 10);
            state.btVaiText = "PAUSAR"
        }
        this.setState(state);
    }

    limpar(){
        let state = this.state;
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }
        state.numero = 0;
        state.btVaiText = "VAI";
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                 <img src={require('./assets/cronometro.png')} className="image"></img>   
                 
        <a className="timer">{this.state.numero.toFixed(2)}</a>
                 
                 <div className="areaBtn">
                     <a className="botao" onClick={this.vai}>{this.state.btVaiText}</a>
                     <a className="botao" onClick={this.limpar}>LIMPAR</a>
                 </div>
            </div>
        );
    }
}

export default App 