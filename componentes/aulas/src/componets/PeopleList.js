import React, { Component} from 'react';

  const myList = [
    {id: 1, nome: "Antonio", idade: 25},
    {id: 2, nome: "Ana", idade: 22},
    {id: 3, nome: "Fulano", idade: 24},
  ];

class PeopleList extends Component{

  sayMyName(person){
    alert(person.nome);
  }

  render(){
    return(
      <div>
        <ul>
          {myList.map((item) => 
            (<li onClick={this.sayMyName.bind(this, item)} key={item.id}>{item.nome} tem {item.idade} anos</li>))  
          }
        </ul>
      </div>
    )
  }
}

export default PeopleList;