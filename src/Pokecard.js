"use strict";

/** Accepts information [id, name, type, base_experience] about a single pokemon
 * ex: {id: 4, name: 'Charmander', type: 'fire',  base_experience: 62}
 *
 * returns a rendering of pokemon information
 */

function Pokecard({ id, name, type, base_experience }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={imgURL(id)}></img>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

function imgURL(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export default Pokecard;
