import React, { Component } from 'react'
import Feed from './components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error : ''
        }

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event){
        const {nome, email, senha} = this.state;
        if(nome !== '' && email !== '' && senha !== ''){
            alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`)
        }
        else{
            this.setState({error: 'Oops! Esta faltando algo!'});
        }
        event.preventDefault();
    }

    render(){
        return(
            <div>
            <h2>Novo usuario</h2>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.cadastrar} method="post">
                Nome:
                <input type="nome" name="nome" value={this.state.nome} 
                    onChange={(event)=> this.setState({nome: event.target.value})}></input><br/>
                Email:
                <input type="email" name="email" value={this.state.email} 
                    onChange={(event)=> this.setState({email: event.target.value})}></input><br/>
                Senha:
                <input type="password" name="senha" value={this.state.senha} 
                    onChange={(event)=> this.setState({senha: event.target.value})}></input><br/>
                
                <button type="submit">Cadastrar</button>
            </form>
            </div>
            
        );
    }
}

export default App 