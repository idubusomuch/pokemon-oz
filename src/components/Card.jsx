import { useNavigate } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { memo, useState } from 'react';

export const Card = memo(({ pokemon }) => {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <div
      className="w-[150px] border-[1px] border-solid border-gray-500 rounded-2xl flex justify-center flex-col items-center pb-2 card-shadow"
      onClick={() => navigate(`/detail/${pokemon.id}`)}>
      {isImgLoading ? (
        <div className="w-[120px] h-[120px] leading-[120px] text-center">
          로딩중 ...{' '}
        </div>
      ) : null}
      <img
        onLoad={() => setIsImgLoading(false)}
        src={pokemon.front}
        className={`w-[120px] ${isImgLoading ? 'hidden' : 'block'}`}
      />
      <div>
        <FavoriteButton pokemonId={pokemon.id} /> {pokemon.name}
      </div>
    </div>
  );
});
