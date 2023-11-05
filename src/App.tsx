import CharacterList from './components/characterList/CharacterList';
import SearchBar from './components/searchBar/SearchBar';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <header>
          <h1>Rick and Morty</h1>
          <SearchBar />
        </header>
        <main className='main'>
          <Routes>
            <Route path='*' element={<CharacterList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
