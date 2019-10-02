import React, { useState, useEffect } from 'react';

export default function List(){

  const [repositories, setRepositories] = useState([]);
  const [texto, setTexto] = useState("");

  useEffect(async()=>{
    const response = await fetch('https://api.github.com/users/antonio-abrantes/repos');
    const data = await response.json();
    
    setRepositories(data);
  }, []);

  useEffect(()=>{
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `${filtered.length} Favoritos`;
  }, [repositories])

  function handleFavorite(id){
      const newRepositories = repositories.map(repo =>{
        return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo; 
      })
      setRepositories(newRepositories);
  }

  function handleAddRepository(){
    setRepositories([ 
      ... repositories, 
      {id: Math.random(), name: texto}
    ]);
    document.getElementById("repoName").value = "";
  }

  function handleInputChange(){
    setTexto(document.getElementById("repoName").value);
  }

  return (
    <>
      <h2>Minha lista de repositorios:</h2> <hr/>
      <ul>
      { repositories.map( repo => (
        <li key={repo.id}>
        {repo.name}
          {repo.favorite && <span style={{backgroundColor: "green"}}>(Favorito)</span>}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
        </li>
      ))}
      </ul>
      <label name="repoName">Novo reposirotio: </label>
      <input type="text" id="repoName" onChange={handleInputChange} ></input>
      <button onClick={handleAddRepository} >
        Adicionar repositorio
      </button>
    </>
  );
}