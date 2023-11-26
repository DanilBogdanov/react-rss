import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Routes } from '@/types/routes';
import styles from './searchBar.module.css';

export default function SearchBar() {
  const router = useRouter();
  const searchInput = useRef<HTMLInputElement>(null!);

  const onClick = () => {
    const search = searchInput.current.value;
    const query = search.length !== 0 ? `?q=${search}` : '';
    router.push(`${Routes.SEARCH}${query}`);
  };

  return (
    <div className={styles['search-bar']} data-testid='search-bar'>
      <input placeholder='type here...' ref={searchInput}></input>
      <button
        className={styles['search-bar__btn']}
        type='button'
        onClick={onClick}
      >
        Search
      </button>
    </div>
  );
}
