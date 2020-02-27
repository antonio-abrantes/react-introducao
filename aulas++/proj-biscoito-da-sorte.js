import React, { Component } from 'react'
import './estilo.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoBiscoito: ''
        }
        this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'];

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
    }

    quebraBiscoito(){
        let state = this.state;
        let randon = Math.floor(Math.random() * this.frases.length);
        state.textoBiscoito = '"'+ this.frases[randon] +'"'; 
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img"></img>
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}></Botao>
                <h3 className="textoFrase">{this.state.textoBiscoito}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App 