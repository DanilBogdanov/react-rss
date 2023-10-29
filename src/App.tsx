import CharacterList from './components/characterList/CharacterList';
import SearchBar from './components/searchBar/SearchBar';
import React from 'react';
import './App.css';
import ErrorBoundary from './components/errorBoundary/errorBoundary';

type AppState = {
  query: string | null;
};

export default class App extends React.Component<object, AppState> {
  state: AppState = {
    query: null,
  };

  onChangeQuery(q: string) {
    this.setState({ query: q });
  }

  render() {
    return (
      <ErrorBoundary>
        <header>
          <h1>Rick and Morty</h1>
          <SearchBar
            onChange={(query) => this.onChangeQuery(query)}
          ></SearchBar>
        </header>
        <main className='main'>
          <CharacterList name={this.state.query} />
        </main>
      </ErrorBoundary>
    );
  }
}
