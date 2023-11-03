import React, { useEffect, useState } from 'react';
import CharacterCard from '../characterCard/CharacterCard';
import { Character, CharacterResponse } from '../../types/api';
import { api } from '../../api/api';
import './characterList.css';

type CharacterListProps = {
  query: string;
};

export default function CharacterList({
  query,
}: CharacterListProps): JSX.Element {
  const [charactersResponse, setCharactersResponse] =
    useState<CharacterResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function update(): Promise<void> {
      setIsLoading(true);
      let response: CharacterResponse;
      if (query.length !== 0) {
        response = await api.search(query);
      } else {
        response = await api.getCharacters();
      }
      setCharactersResponse(response);
      setIsLoading(false);
    }
    update();
  }, [query]);

  return (
    <div className='character-list'>
      <div className='character-list__cards'>
        {isLoading ? (
          <div>
            <h3>Loading</h3>
            <br />
            <img src='/spinner.svg' alt='spinner' height={200} />
          </div>
        ) : charactersResponse?.results ? (
          charactersResponse.results.map((char: Character) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <h3>No Results</h3>
        )}
      </div>
    </div>
  );
}
