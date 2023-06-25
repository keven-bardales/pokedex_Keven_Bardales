import { useEffect, useState } from 'react';
import { PICTURE_POKEMON_URL } from './../services/api';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getPokemonByIdRequest } from '../services/api.js';
import '../styles/ShowPokemon.css';

function ShowPokemon() {
  const PLACEHOLDER =
    'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png';

  const navigate = useNavigate();

  const [pokemon, setpokemon] = useState();
  const params = useParams();

  const imgPokemon = `${PICTURE_POKEMON_URL}${params.id}.png`;

  const loadPokemon = async (id) => {
    const newPokemon = await getPokemonByIdRequest(id);
    setpokemon(newPokemon);
  };

  useEffect(() => {
    if (params.id) {
      loadPokemon(params.id);
    }
  }, [params.id]);

  const renderHabilities = () => {
    if (!pokemon) return <span>Nothing to Show right Now</span>;
    const { abilities } = pokemon;
    return abilities.map((obj) => {
      return <span key={obj.ability.name}>{obj.ability.name}</span>;
    });
  };

  const renderStats = () => {
    if (!pokemon) return <span>Nothing to Show right Now</span>;
    return pokemon.stats.map((obj) => {
      console.log(obj);
      return (
        <span key={obj.stat.name}>
          {obj.stat.name}: {obj.base_stat}
        </span>
      );
    });
  };

  return (
    <>
      <article
        onClick={() => navigate(`/showPokemon/${pokemon.id}`)}
        className='card showPokemon'
      >
        <img src={imgPokemon ? imgPokemon : PLACEHOLDER}></img>
        <h1>{pokemon ? pokemon.id : 'Pokemon Id'}</h1>
        <h2>{pokemon ? pokemon.name : 'Pokemon Name'}</h2>
        <div>{renderHabilities()}</div>
        <div>{renderStats()}</div>
      </article>
    </>
  );
}

export default ShowPokemon;
