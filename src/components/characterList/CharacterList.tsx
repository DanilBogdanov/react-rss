import React from 'react';
import CharacterCard from '../characterCard/CharacterCard';
import { Character, CharacterResponse } from '../../types/api';
import { api } from '../../api/api';
import { LSKEY_PREV_QUERY } from '../../types/constants';
import './characterList.css';

type CharacterListProps = {
  name: string | null;
};

type CharacterListState = {
  charactersResponse: CharacterResponse | null;
  isLoading: boolean;
};

export default class CharacterList extends React.Component<
  CharacterListProps,
  CharacterListState
> {
  state: CharacterListState = {
    charactersResponse: null,
    isLoading: false,
  };

  async update(query: string | null): Promise<void> {
    this.setState({ isLoading: true });
    let response: CharacterResponse;
    if (query) {
      response = await api.search(query);
    } else {
      response = await api.getCharacters();
    }
    this.setState({ charactersResponse: response, isLoading: false });
  }

  componentDidMount(): void {
    const prevQuery = localStorage.getItem(LSKEY_PREV_QUERY);
    this.update(prevQuery);
  }

  componentDidUpdate(prevProps: Readonly<CharacterListProps>): void {
    if (this.props.name !== prevProps.name) {
      this.update(this.props.name);
    }
  }

  render(): JSX.Element {
    return (
      <div className='character-list'>
        <div className='character-list__cards'>
          {this.state.isLoading && (
            <div>
              <h3>Loading</h3>
              <br />
              <img src='/spinner.svg' alt='spinner' height={200} />
            </div>
          )}
          {this.state.charactersResponse &&
            this.state.charactersResponse.results &&
            !this.state.isLoading &&
            this.state.charactersResponse.results?.map((char: Character) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          {(!this.state.charactersResponse ||
            !this.state.charactersResponse.results) &&
            !this.state.isLoading && <h3>No Results</h3>}
        </div>
      </div>
    );
  }
}
