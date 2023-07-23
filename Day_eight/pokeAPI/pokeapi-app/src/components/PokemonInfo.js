// src/components/PokemonInfo.js

import React, { useState } from 'react';
import axios from 'axios';

const PokemonInfo = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);

  const handlePokemonIdChange = (event) => {
    setPokemonId(event.target.value);
  };

  const handleFetchData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      setPokemonData(response.data);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  return (
    <div>
      <h2>Input a number to receive a Pokémon</h2>
      <input type="number" value={pokemonId} onChange={handlePokemonIdChange} />
      <button onClick={handleFetchData}>Fetch Pokémon Data</button>

      {pokemonData && (
        <div>
          <h3>{pokemonData.name}</h3>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <ul>
            {pokemonData.abilities.map((abilityData) => (
              <li key={abilityData.ability.name}>
                {abilityData.ability.name} ({abilityData.is_hidden ? 'Hidden' : 'Normal'})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
