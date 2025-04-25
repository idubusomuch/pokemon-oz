import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPokemonById } from '../RTK/selector';

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  console.log(pokemon);
  return (
    <div className="flex flex-col justify-center items-center mt-5 border border-gray-500 rounded-3xl p-6 w-full m-auto max-w-[500px]">
      <div className="text-3xl mb-5">{pokemon.name}</div>
      <img src={pokemon.front} className="w-[200px] mb-5" />
      <div className="whitespace-pre-wrap">{pokemon.description}</div>
      <div></div>
    </div>
  );
}
