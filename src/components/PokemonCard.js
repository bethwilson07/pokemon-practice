import React from 'react';

const PokemonCard = (props) => {
  return (
    <div className="pokemon card">
      {props.pokemon.name}
    </div>
  )
}

export default PokemonCard;
