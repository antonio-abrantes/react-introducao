import React,{ Component } from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        
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
            <form>
                <label>Name:
                    <input type="text" name="name" value={state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        )
    }

}

export default MyForm;