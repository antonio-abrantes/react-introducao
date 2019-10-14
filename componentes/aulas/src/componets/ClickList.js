import React, {Component} from 'react';
import { Channel } from '../services/EventEmitter';

class ClickList extends Component{

  constructor(props){
    super(props);
    this.state = {
      total: 0,
      hasError: false
    }

    this.setTotal = this.setTotal.bind(this);
    this.restart = this.restart.bind(this);

  }

  componentDidMount(){
    Channel.on('listItem:click', this.setTotal);
  }

  componentWillMount(){
    Channel.removeAllListeners('listItem:click', this.setTotal);
  }

  componentDidCatch(error){
    console.log(error);
  }

  static getDerivedStateFromError(error){
    return {
      hasError: true
    }
  }

  restart(){
    this.setState({
      total: 0,
      hasError: false
    })
  }

  setTotal(){
    this.setState(state =>{
      return {
        total: state.total + 1
      }
    })
  }

  render(){

    if(this.state.hasError){
      return <button onClick={this.restart}>Restart</button>
    }

    return(
      <div>
        <div>
          Total: {this.state.total}
        </div>
        <ul>
        {this.props.children.map((item, index) =>{
            return <item.type  index={index}>
                    {item.props.children}
                  </item.type>
          })}
        </ul>
      </div>
    )
  }
}

export default ClickList;