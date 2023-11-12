import React, { ReactNode, useEffect, useState } from 'react';
import { CharacterResponse } from '@/types/api';
import { LSKEY_PREV_QUERY } from '@/types/constants';

type AppContextType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  characters: CharacterResponse | null;
  setCharacters: React.Dispatch<React.SetStateAction<CharacterResponse | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = React.createContext<AppContextType>({
  query: '',
  setQuery: () => {},
  characters: null,
  setCharacters: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

function useAppContext(): AppContextType {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error(
      `useAppContext must be used within a CharactersContextProvider`
    );
  }
  return context;
}

function AppContextProvider({ children }: { children?: ReactNode }) {
  const [query, setQuery] = useState<string>(
    localStorage.getItem(LSKEY_PREV_QUERY) ?? ''
  );
  const [characters, setCharacters] = useState<CharacterResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem(LSKEY_PREV_QUERY, query);
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        characters,
        setCharacters,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { useAppContext, AppContextProvider };
