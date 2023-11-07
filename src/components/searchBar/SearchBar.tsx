import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';

export default function SearchBar(): JSX.Element {
  const navigate = useNavigate();
  const { query, setQuery } = useAppContext();
  const [inputValue, setInputValue] = useState<string>(query);

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
  }

  function onSearchClick() {
    const q = inputValue.trim();
    setQuery(q);
    navigate(`search/?query=${q}`);
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={(event) => onChangeInput(event)}
        placeholder='type here...'
      ></input>
      <button type='button' onClick={() => onSearchClick()}>
        Search
      </button>
    </div>
  );
}
