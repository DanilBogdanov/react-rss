import React, { useEffect, useState } from 'react';
import CharacterCard from '../characterCard/CharacterCard';
import { Character, CharacterResponse } from '../../types/api';
import { api } from '../../api/api';
import './characterList.css';
import { useSearchParams } from 'react-router-dom';
import { LSKEY_PREV_QUERY, PER_PAGE_DEFAULT } from '../../types/constants';
import { getPageLimit } from '../../utils/apiUtils';
import Pagination from '../pagination/Pagination';

export default function CharacterList(): JSX.Element {
  const [searchParams] = useSearchParams();
  const [charactersResponse, setCharactersResponse] =
    useState<CharacterResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(PER_PAGE_DEFAULT);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>(
    localStorage.getItem(LSKEY_PREV_QUERY) ?? ''
  );

  useEffect(() => {
    const limitParam = +(searchParams.get('limit') ?? PER_PAGE_DEFAULT);
    limit === limitParam || setLimit(limitParam);
    const pageParam = +(searchParams.get('page') ?? 1);
    page === pageParam || setPage(pageParam);
    const queryParam = searchParams.get('query') ?? '';
    query === queryParam || setQuery(queryParam);
  }, [limit, page, query, searchParams]);

  useEffect(() => {
    async function update(): Promise<void> {
      setIsLoading(true);
      const response = await api.getCharacters({
        name: query,
        limit: getPageLimit(limit),
        page: page,
      });
      setCharactersResponse(response);
      setIsLoading(false);
    }

    update();
  }, [limit, page, query]);

  return (
    <div className='character-list'>
      {isLoading ? (
        <div>
          <h3>Loading</h3>
          <br />
          <img src='/spinner.svg' alt='spinner' height={200} />
        </div>
      ) : charactersResponse?.results ? (
        <>
          <Pagination
            limit={limit}
            count={charactersResponse.info.count}
            currentPage={page}
          />
          <div className='character-list__cards'>
            {charactersResponse.results.map((char: Character) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
          <Pagination
            limit={limit}
            count={charactersResponse.info.count}
            currentPage={page}
          />
        </>
      ) : (
        <h3>No Results</h3>
      )}
    </div>
  );
}
