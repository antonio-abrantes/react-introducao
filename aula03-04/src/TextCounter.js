import React, { Component } from 'react';

class TextCounter extends Component{

    static defaultProps = {
        limit: 15
    }

    constructor(props){
        super(props);
        
        this.state = {
            totalChars: 0,
            text: ''
        }
        this.hendleChange = this.hendleChange.bind(this);
    }

    hendleChange(event){
        const element = event.target, text = element.value;
        
        if(text.length <= this.props.limit){
            this.setState({
                totalChars: text.length,
                text: text
            });
        }
    }

    render(){
        const {props} = this;
        return(
            <div>
                <h1>Meu Contador</h1>
                <textarea onChange={this.hendleChange} value={this.state.text} />
                <div>
                    <strong>Total:</strong> { this.state.totalChars } / {props.limit}
                </div>
            </div>
        );
    }
}

export default TextCounter;