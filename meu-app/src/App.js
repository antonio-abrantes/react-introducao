import React,{ Component } from 'react';
//import TextCounter from './components/TextCounter';
import Box from './components/Box';
import Relogio from './components/Relogio';
import MyForm from './components/MyForm2';

const divStyle = {
  margin: '40px'
}

class App extends Component{

  render(){
    return(
     <div style={divStyle}>
        <h1 style={{backgroundColor: 'grey', padding: '10px'}}>Meu APP React</h1>
        <MyForm></MyForm>
        <Box nome="Antonio Abrantes"></Box>
        <Relogio></Relogio>
     </div> 
    );
  }

}

export default App;
