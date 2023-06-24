import { PICTURE_POKEMON_URL } from './../services/api';
import { useNavigate } from 'react-router-dom';

function Pokemon({ pokemon }) {
  const PLACEHOLDER =
    'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png';

  const imgPokemon = `${PICTURE_POKEMON_URL}${pokemon.id}.png`;

  const navigate = useNavigate();

  const renderHabilities = () => {
    if (!pokemon) return <span>Nothing to Show right Now</span>;
    const { abilities } = pokemon;
    return abilities.map((obj) => {
      return <span key={obj.ability.name}>{obj.ability.name}</span>;
    });
  };

  return (
    <>
      <article
        onClick={() => navigate(`/pokemon/${pokemon.id}`)}
        className='card'
      >
        <img src={imgPokemon ? imgPokemon : PLACEHOLDER}></img>
        <h1>{pokemon ? pokemon.id : 'Pokemon Id'}</h1>
        <h2>{pokemon ? pokemon.name : 'Pokemon Name'}</h2>
        <div>{renderHabilities()}</div>
      </article>
    </>
  );
}

export default Pokemon;
