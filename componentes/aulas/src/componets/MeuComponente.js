import React from "react";

//Componente como função
// function MeuComponente(){
//   return <h1>Meu MeuComponente</h1>
// }

//Componente como Classe
class MeuComponente extends React.Component{
  render(){
    const {props} = this;


    
    return (
      <div>
        <h1>Meu MeuComponente - Props: {props.nome}</h1><hr></hr>

        <ul>
          <li>Nome: {props.nome}</li>
          <li>Sobreome: {props.sobrenome}</li>
          <li>Idade: {props.idade}</li>
        </ul>

      </div>
    )
  }
}

export const MeusComponentes ={
  Componente1: function(props){
    return <h2>Componente do objetos - {props.nome}</h2>
  }
}

export default MeuComponente;