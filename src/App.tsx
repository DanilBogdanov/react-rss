import React, { useState } from 'react';
import CharacterList from './components/characterList/CharacterList';
import SearchBar from './components/searchBar/SearchBar';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import './App.css';

export default function App(): JSX.Element {
  const [query, setQuery] = useState<string | null>(null);

  function onChangeQuery(q: string) {
    setQuery(q);
  }

  return (
    <ErrorBoundary>
      <header>
        <h1>Rick and Morty</h1>
        <SearchBar onChange={(query) => onChangeQuery(query)}></SearchBar>
      </header>
      <main className='main'>
        <CharacterList name={query} />
      </main>
    </ErrorBoundary>
  );
}
