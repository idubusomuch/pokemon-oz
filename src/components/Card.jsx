import { useNavigate } from 'react-router-dom';

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[150px] border-[1px] border-solid border-gray-500 rounded-2xl flex justify-center flex-col items-center"
      onClick={() => navigate(`detail/${pokemon.id}`)}>
      <img src={pokemon.front} className="w-[120px]" />
      <div>{pokemon.name}</div>
    </div>
  );
};
