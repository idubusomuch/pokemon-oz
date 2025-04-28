import { useSelector } from 'react-redux';
import { selectorFavoritePokemons } from '../RTK/selector';
import { Card } from '../components/Card';

export default function Favorite() {
  const pokemon = useSelector(selectorFavoritePokemons);
  return (
    <>
      <div className="container">
        {pokemon.map((el) => (
          <Card key={el.id} pokemon={el} />
        ))}
      </div>
    </>
  );
}
