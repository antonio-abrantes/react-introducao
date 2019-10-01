import React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';

function About(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {console.log(props)}
                <p>
                  Eu sou um {props.user.employerInfo.carrer}  
                </p>
                <p>
                Meu nome é {props.user.personalInfo.nome}
                </p>
                <p>
                    Esta pagina é o sobre do Aplicativo ReactJS! 
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default About;