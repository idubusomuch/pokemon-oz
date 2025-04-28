import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteSlice } from '../RTK/slice';

export default function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId),
  );
  const dispatch = useDispatch();

  return (
    <button
      // 하트 클릭 시 상세화면 페이지로 넘어가지 않도록 상위 엘리먼트로의 이벤트 전파 중단
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId }),
        );
      }}
      className={`mr-2 cursor-pointer transition-transform duration-300 ${
        isFavorite ? 'text-[red] scale-125' : ''
      }`}>
      {isFavorite ? '♥' : '♡'}
    </button>
  );
}
