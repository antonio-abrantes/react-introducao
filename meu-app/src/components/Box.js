import React from 'react';

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
};

const Box = (props) =>{
    return(
        <div style={divStyle}>
            <h1>Componente de Post com React</h1>
            <hr />
            <p>Post feito com React! By {props.nome}</p>
        </div>
    )
}

export default Box;