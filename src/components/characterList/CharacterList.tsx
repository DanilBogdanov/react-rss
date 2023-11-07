import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import CharacterCard from '@/components/characterCard/CharacterCard';
import Pagination from '@/components/pagination/Pagination';
import Loader from '@/components/loader/Loader';
import { getPageLimit } from '@/utils/apiUtils';
import { PER_PAGE_DEFAULT } from '@/types/constants';
import { Character } from '@/types/api';
import { api } from '@/api/api';
import './characterList.css';

export default function CharacterList(): JSX.Element {
  const [searchParams] = useSearchParams();
  const [limit, setLimit] = useState<number>(PER_PAGE_DEFAULT);
  const [page, setPage] = useState<number>(1);
  const { query, characters, setCharacters, isLoading, setIsLoading } =
    useAppContext();

  useEffect(() => {
    const limitParam = +(searchParams.get('limit') ?? PER_PAGE_DEFAULT);
    limit === limitParam || setLimit(limitParam);
    const pageParam = +(searchParams.get('page') ?? 1);
    page === pageParam || setPage(pageParam);
  }, [limit, page, searchParams]);

  useEffect(() => {
    async function update(): Promise<void> {
      setIsLoading(true);
      const response = await api.getCharacters({
        name: query,
        limit: getPageLimit(limit),
        page,
      });
      setCharacters(response);
      setIsLoading(false);
    }

    update();
  }, [limit, page, query, setCharacters, setIsLoading]);

  return (
    <div className='character-list'>
      {isLoading ?? <Loader />}
      {!isLoading && characters?.results && (
        <>
          <Pagination
            limit={limit}
            count={characters.info.count}
            currentPage={page}
          />
          <div className='character-list__cards'>
            {characters.results.map((char: Character) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
          <Pagination
            limit={limit}
            count={characters.info.count}
            currentPage={page}
          />
        </>
      )}
      {!isLoading && !characters?.results && <h3>No Results</h3>}
    </div>
  );
}
