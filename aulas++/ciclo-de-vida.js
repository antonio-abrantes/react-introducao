import React, { Component } from 'react'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00'
        }
    }

    componentDidMount(){
        //Quando o componente é montado
        setInterval(()=>{
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000);
    }

    componentDidUpdate(){
        //Sempre que um componente for atualizado
        console.log("Atualziadou!");
    }

    render(){
        return(
            <div>
                <h2>Meu Projeto {this.state.hora}</h2>

            </div>
        );
    }
}

export default App 