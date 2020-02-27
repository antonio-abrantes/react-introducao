import React, { Component } from 'react'

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            status: false
        }

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);

    }

    entrar(nome){
        this.setState({status: true});
    }

    sair(nome){
        this.setState({status: false});
    }

    render(){
        return(
            <div>
                {this.state.status ? 
                    <div>
                        <h2>Bem vindo(a) {this.state.nome}</h2>
                        <button onClick={this.sair}>Sair</button> 
                    </div> :
                    <div>
                        <h2>Ola visitante!</h2>
                        <button onClick={this.entrar}>Entrar</button>
                    </div>
                }
            </div>
        );
    }
}

export default Membro