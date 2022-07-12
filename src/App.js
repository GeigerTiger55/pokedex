"use strict";

import Pokedex from './Pokedex';
import './App.css';
import pokemon from './pokemon';



function App() {
  return (
    <div className='App'>
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
