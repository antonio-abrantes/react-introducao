import React,{ Component } from 'react';
import '../css/indexCss.css';

class TextCounter extends Component{

    constructor(props){
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //console.log('this is:', this);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
    }

    handleClick2= () => {
        console.log('this is:', this);
      }

    render(){
        return(
            <div className="divPrincipal">
            <textarea>
            
            </textarea><br></br>
            <input type={'button'} value={'salvar'} onClick={this.handleClick2} ></input>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
        )        
    }
}

export default TextCounter;