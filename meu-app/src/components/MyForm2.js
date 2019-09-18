import React,{ Component } from 'react';

class MyForm2 extends Component{
    constructor(props){
        super(props);

        this.inputName = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            list: []
        }
    }

    handleSubmit(event){
        //console.log(this.inputName.current.value);
        event.preventDefault();
        fetch(`https://api.github.com/search/repositories?q=${this.inputName.current.value}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    list: data.items
                })
            })
    }

    render(){
        const { state } = this;
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Name:
                    <input type="text" name="name" ref={this.inputName} />
                </label>
                <input type="submit" value="Buscar" />
                </div>
            </form>
            <ul>
                {state.list.map(item => <li>{item.full_name}</li>)}
            </ul>
            </div>
        )
    }
}

export default MyForm2;