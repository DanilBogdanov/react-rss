import React, { useState } from 'react';
import { LSKEY_PREV_QUERY } from '../../types/constants';
import { useNavigate } from 'react-router-dom';

export default function SearchBar(): JSX.Element {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>(
    localStorage.getItem(LSKEY_PREV_QUERY) ?? ''
  );

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setQuery(value);
  }

  function onSearchClick() {
    const q = query.trim();
    localStorage.setItem(LSKEY_PREV_QUERY, q);
    navigate(`/?query=${q}`);
  }

  return (
    <div>
      <input
        value={query}
        onChange={(event) => onChangeInput(event)}
        placeholder='type here...'
      ></input>
      <button type='button' onClick={() => onSearchClick()}>
        Search
      </button>
    </div>
  );
}
