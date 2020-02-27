import React, { Component } from 'react';

class MyForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: '',
            fruit: 'orange',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);

        this.fruits = [
            {'name': 'Apple', 'value': 'apple'},
            {'name': 'Banana', 'value': 'banana'},
            {'name': 'Orange', 'value': 'orange'}
        ]
    }

    handleChange(event){
        const target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;
        
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <form>
                    <label>
                        Nome:<input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> {this.state.name}
                    </label><br/>
                    <label>
                        Message:
                        <textarea value={this.state.message} name="message" onChange={this.handleChange}/>
                    </label><br/>
                    <label>Fruit:
                       <select value={this.state.fruit} name="fruit" onChange={this.handleChange}>
                           {
                               this.fruits.map(fruit => 
                                    <option value={fruit.value}>{fruit.name}</option>
                               )
                           }
                       </select>
                    </label><br/>

                    <br/><input type="submit" value="Enviar" />
                </form>
            </div>
        );
    }
}

export default MyForm;