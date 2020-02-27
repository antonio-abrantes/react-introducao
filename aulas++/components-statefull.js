import React, { Component } from 'react'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Antonio',
            contador: 0
        }

        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
    }

    incrementar(){
        let state = this.state;
        state.contador += 1;
        this.setState(state)
        console.log('Incrementou!');
    }

    decrementar(){
        let state = this.state;
        if(state.contador > 0){
            state.contador -= 1;
            this.setState(state)
            console.log('Decrementou!');
        }   
    }

    render(){
        return(
            <div>
                <h2>contador</h2>
                <button onClick={this.decrementar}>-</button>
                    {this.state.contador}
                <button onClick={this.incrementar}>+</button>
            </div>
        );
    }
}

export default App 