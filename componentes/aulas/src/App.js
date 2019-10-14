import React, { Component} from 'react';
//import './App.css';
import MeuComponente, { MeusComponentes } from './componets/MeuComponente';
import Time from './componets/Time';
import MyButton from './componets/MyButton';
import PeopleList from './componets/PeopleList';
import ClickList from './componets/ClickList';
import ClickListItem from './componets/ClickListItem';
import MyVideo from './componets/MyVideo';

import { MyContext} from './services/MyContext';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedItem: this.item1,
      userName: 'antonio'
    }

    this.item1 = React.createRef();
    this.item2 = React.createRef();

    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem(){
      this.setState(({selectedItem})=>{
        return{
          selectedItem: (selectedItem === this.item1 ? this.item2 : this.item1)
        }
      })
  }

  render(){
    const ComponenteEscolhido = MeusComponentes['Componente1'];
    const dados = {
      nome: "Antonio",
      sobrenome: "Abrantes",
      idade: 25
    }

    return (
      <div className="App">
        <MeuComponente {...dados}></MeuComponente>

        <MyContext.Provider value={this.state}>
        <div>
          <ul>
            <li ref={this.item1}>
              {/* {this.state.selectedItem === this.item1 ? <Time /> : ""} */}
            </li>
            <li ref={this.item2}>
              {/* {this.state.selectedItem === this.item2 ? <Time /> : ""} */}
            </li>
          </ul>
          {/* <Time container={this.state.selectedItem.current} />
          <button onClick={this.toggleItem}>Toggle</button> */}
        </div>
        
        {/* <Time></Time> <hr></hr> */}
        {/* <MeusComponentes.Componente1></MeusComponentes.Componente1>
        <ComponenteEscolhido nome="Antonio Abrantes"></ComponenteEscolhido> */}

        {/* <MyButton></MyButton> */}

        {/* <PeopleList></PeopleList> */}

        <hr>
        </hr>

        <ClickList number="123">
          <ClickListItem></ClickListItem>
          <ClickListItem></ClickListItem>
          <ClickListItem></ClickListItem>
        </ClickList> <hr></hr>
        
        <MyVideo src="https://storage.coverr.co/videos/coverr-rocky-waterfall-1570370475981?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTcwOTczNTE0fQ.HGnVcVYprej1uckOhbXeyFhOg_iUwLnUTPVPnj2Nz2Y"></MyVideo>

        </MyContext.Provider>
      </div>
    );
  }
  
}

export default App;


/**
 * Repositorio do curso:
 * https://github.com/treinaweb/treinaweb-react-dominando-componentes
 * 
 * Reac DevTools -> npm install -g react-devtools
 * 1- Execute no terminal o comando "react-devtools"
 * 2- Insira no <head> da sua aplicação a seguinte tag: <script src="http://localhost:8097"></script>
 */
