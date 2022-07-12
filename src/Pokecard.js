"use strict";

import './Pokecard.css'

/** Accepts information [id, name, type, base_experience] about a single pokemon
 * ex: {id: 4, name: 'Charmander', type: 'fire',  base_experience: 62}
 *
 * returns a rendering of pokemon information
 */

function Pokecard({ id, name, type, base_experience }) {
  return (
    <div className='Pokecard'>
      <h3 className='Pokecard-header'>{name}</h3>
      <img className='Pokecard-img' src={imgURL(id)} alt={name}></img>
      <p className='Pokecard-p'>Type: {type}</p>
      <p className='Pokecard-p'>EXP: {base_experience}</p>
    </div>
  );
}

function imgURL(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export default Pokecard;
