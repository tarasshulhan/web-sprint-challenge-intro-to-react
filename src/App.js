import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacters(res.data);
      }).catch(err => {
        console.error(err);
      })
  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters && characters.map(char => {
        return <Character name = {char.name} birth_year = {char.birth_year}/>
      })
      }
    </div>
  );
}

export default App;
