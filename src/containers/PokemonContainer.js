import React from 'react';
import PokemonCard from '../components/PokemonCard'

const PokemonContainer = (props) => {
  return (
    <div>
    {props.pokemon.map((p, index) => < PokemonCard key={index} pokemon={p}/>)}
    </div>
  )
}

export default PokemonContainer;
