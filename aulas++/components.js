import React from 'react'

const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <Social fb={props.facebook}></Social>
            <hr></hr>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Ola sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}  >Facebook</a>
            <a>LinkedIn</a>
            <a>Youtube</a>
        </div>
    );
}

function App(){
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Antonio" cargo="programador" idade="30"
                 facebook="http:www.google.com" />
        </div> 
    )
}

export default App 