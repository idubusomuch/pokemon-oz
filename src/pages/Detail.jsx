import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPokemonById } from '../RTK/selector';
import FavoriteButton from '../components/FavoriteButton';
import FlipCard from '../components/FlipCard';

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <div className="detail-card card-shadow">
      <div className="text-3xl mb-5">
        <FavoriteButton pokemonId={Number(pokemonId)} />
        {pokemon.name}
      </div>
      <FlipCard front={pokemon.front} back={pokemon.back} />
      <div className="whitespace-pre-wrap">{pokemon.description}</div>
      <div></div>
    </div>
  );
}
