import React, { Component } from 'react'
import Feed from './components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Antonio', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Ana Paula', curtidas: 15, comentarios: 10},
                {id: 3, username: 'Fulano', curtidas: 8, comentarios: 8},
                {id: 4, username: 'Ciclano', curtidas: 7, comentarios: 2},
                {id: 5, username: 'Baltrano', curtidas: 5, comentarios: 9}
            ]
        }
    }


    render(){
        return(
            <div>
                {this.state.feed.map((item) =>{
                    return(
                        <Feed
                            key={item.id} username={item.username}
                            curtidas={item.curtidas} comentarios={item.comentarios}
                        ></Feed>
                    );
                })}               
            </div>
        );
    }
}

export default App 