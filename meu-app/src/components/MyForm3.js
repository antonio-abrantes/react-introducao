import React,{ Component } from 'react';

class MyForm2 extends Component{
    constructor(props){
        super(props);

        this.inputName = React.createRef();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            list: []
        }
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(`https://api.github.com/search/repositories?q=${this.inputName.current.value}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({
            name: event.target.value
        })

    }

    render(){
        const {state} = this;

        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type="text" name="name" value={state.name} ref={this.inputName} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        )
    }

}

export default MyForm2;