import { Outlet, useNavigate } from 'react-router-dom';
import { AppContextProvider } from '@/context/AppContext';
import Layout from '@/components/layout/Layout';
import SearchBar from '@/components/searchBar/SearchBar';
import CharacterList from '@/components/characterList/CharacterList';
import './searchPage.css';

export default function SearchPage(): JSX.Element {
  const navigate = useNavigate();

  function onClick() {
    const url = new URL(location.href);
    url.pathname = 'search';
    navigate(`${url.pathname}${url.search}`);
  }

  return (
    <Layout>
      <AppContextProvider>
        <div className='search-page' onClick={onClick}>
          <header>
            <h1>Rick and Morty</h1>
            <SearchBar />
          </header>
          <main>
            <CharacterList />
          </main>
        </div>
      </AppContextProvider>
      <Outlet />
    </Layout>
  );
}
