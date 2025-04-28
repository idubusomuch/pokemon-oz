import './App.scss';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk.js';

const Main = lazy(() => import('./pages/Main'));
const Detail = lazy(() => import('./pages/Detail'));
const Favorite = lazy(() => import('./pages/Favorite'));
const Search = lazy(() => import('./pages/Search'));

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <div className="min-h-screen bg-[gray] flex flex-col">
      <h1 className="border-t-[30px] border-t-[red] bg-black text-white text-[40px] text-center">
        포켓몬 도감
      </h1>
      <nav className="flex justify-center gap-5 py-4 bg-white">
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜 목록</Link>
        <div>
          <span>🔎</span>
          <input
            className="w-[120px] border-b border-gray-600 px-2 focus:outline-0"
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          />
        </div>
      </nav>
      <div className="py-4">
        <Suspense
          fallback={<div className="text-center text-white">로딩중 ... </div>}>
          <Routes>
            <Route path={'/'} element={<Main />}></Route>
            <Route path={'/search'} element={<Search />}></Route>

            <Route path={'/detail/:pokemonId'} element={<Detail />}></Route>
            <Route path={'/favorite'} element={<Favorite />}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
