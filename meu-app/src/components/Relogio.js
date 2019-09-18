import React,{ Component } from 'react';

class Relogio extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date(),
          comment: 'Hello'
        });
    }

    render(){
        return(
            <div>
                <h1>Relogio React, {this.state.comment}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Relogio;