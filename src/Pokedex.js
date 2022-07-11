"use strict";

import Pokecard from './Pokecard' ;
/** Accepts array of pokemon in props
 *  Renders a sequence of Pokecard componenets
 */
function Pokedex({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <Pokecard
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />
      ))}
    </div>
  );
}

export default Pokedex;