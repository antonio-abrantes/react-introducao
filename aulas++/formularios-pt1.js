import React, { Component } from 'react'
import Feed from './components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            senha: '',
            sexo: 'feminino',
            form: {
                nome: '',
                email: ''
            }
        }

        this.dadosForm = this.dadosForm.bind(this);
        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);
    }

    //Maneira mais pratica de pegar todos os dados de um form
    dadosForm(event){
        let form = this.state.form;
        form[event.target.name] = event.target.value;
        this.setState({form: form});
    }

    trocaEmail(event){
        let valorDigitado = event.target.value;
        this.setState({email: valorDigitado});
    }

    trocaSexo(event){
        let valorDigitado = event.target.value;
        this.setState({sexo: valorDigitado});
    }

    render(){
        return(
            <div>
            <h2>Login</h2>
             Email:
             <input type="email" name="email" value={this.state.email} 
                onChange={this.trocaEmail}></input><br/>
             Senha:
             <input type="password" name="senha" value={this.state.senha} 
                onChange={(event)=> this.setState({senha: event.target.value})}></input><br/>
             Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
             
             <button type="submit">Login</button>
            </div>
            
        );
    }
}

export default App 