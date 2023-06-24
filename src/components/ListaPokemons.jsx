import { useEffect, useState } from 'react';
import { getPokemonList } from '../services/api.js';
import Pokemon from './Pokemon.jsx';
import ModalPokemon from './ModalPokemon.jsx';

function ListaPokemons() {
  const [pokemonList, setpokemonList] = useState(null);

  const loadPokeList = async () => {
    const list = await getPokemonList(10);
    setpokemonList(list);
  };

  useEffect(() => {
    loadPokeList();
  }, []);

  const renderPokeList = () => {
    return pokemonList.map((pokemon) => {
      return <Pokemon key={pokemon.id} pokemon={pokemon}></Pokemon>;
    });
  };

  return (
    <>
      <section className='List'>
        {pokemonList ? renderPokeList() : 'No Pokemons to Display'}
      </section>
      <ModalPokemon id={1}></ModalPokemon>
    </>
  );
}

export default ListaPokemons;
