import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { querySlice } from '@/store/reducers/querySlice';

export default function SearchBar(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.query);
  const [inputValue, setInputValue] = useState<string>(search);
  const { setSearch } = querySlice.actions;

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
  }

  function onSearchClick() {
    const q = inputValue.trim();
    dispatch(setSearch(q));
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
