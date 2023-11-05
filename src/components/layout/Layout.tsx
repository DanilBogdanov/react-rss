import { Outlet, useNavigate } from 'react-router-dom';
import CharacterList from '../characterList/CharacterList';
import SearchBar from '../searchBar/SearchBar';
import './layout.css';

export default function Layout(): JSX.Element {
  const navigate = useNavigate();

  function onClick() {
    const url = new URL(location.href);
    url.pathname = '';
    navigate(`${url.pathname}${url.search}`);
  }

  return (
    <div className='app'>
      <div className='main-page' onClick={onClick}>
        <header>
          <h1>Rick and Morty</h1>
          <SearchBar />
        </header>
        <main className='main'>
          <CharacterList />
        </main>
      </div>
      <Outlet />
    </div>
  );
}
