import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk.js';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Favorite from './pages/Favorite';
import Search from './pages/Search.jsx';

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon);
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex justify-center gap-4">
        <Link to={'/'}>메인</Link>
        <Link to={'/detail/1'}>상세 정보</Link>
        <Link to={'/search'}>검색</Link>
        <Link to={'/favorite'}>찜 목록</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:pokemonId" element={<Detail />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </>
  );
}

export default App;
