import { useSelector } from 'react-redux';
import { Card } from '../components/Card';

export default function Main() {
  //state.pokemon.data만 가져옴 (data 외에도 사용하지 않는 여러 값들이 있기 때문에)
  const pokemonData = useSelector((state) => state.pokemon.data);
  return (
    <>
      <div className="container">
        {pokemonData.map((el) => (
          <Card key={el.id} pokemon={el} />
        ))}
      </div>
    </>
  );
}
