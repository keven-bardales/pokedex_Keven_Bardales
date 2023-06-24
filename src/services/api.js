const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';
export const PICTURE_POKEMON_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const getPokemonByIdRequest = async (idPokemon) => {
  const response = await fetch(`${POKEAPI_URL}${idPokemon}`);
  const data = await response.json();
  const pokemon = {
    name: data.name,
    id: data.id,
    abilities: data.abilities,
    height: data.height,
    weight: data.weight,
    stats: data.stats,
  };

  return pokemon;
};

export const getImgPokemonRequest = (id) => {
  const imgNewPokemon = `${PICTURE_POKEMON_URL}${id}.png`;
  return imgNewPokemon;
};

export const getPokemonList = async (quantity) => {
  const pokemonList = [];
  for (let i = 1; i <= quantity; i++) {
    const newPokemon = await getPokemonByIdRequest(i);
    pokemonList.push(newPokemon);
  }
  return pokemonList;
};
