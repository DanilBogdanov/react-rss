import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Character } from '@/types/api';
import { api } from '@/api/api';
import './characterPage.css';

type Params = {
  id?: string;
};

export default function CharacterPage(): JSX.Element {
  const params = useParams<Params>();
  const id = params.id;
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCharacter = async (charId: number) => {
      setIsLoading(true);
      const resp = await api.getCharacter(charId);
      setCharacter(resp);
      setIsLoading(false);
    };

    if (id) {
      loadCharacter(+id);
    }
  }, [id, params]);

  function onClose() {
    const url = new URL(location.href);
    url.pathname = 'search';
    navigate(`${url.pathname}${url.search}`);
  }

  return (
    <div className='character-page'>
      <button className='character-page__close' type='button' onClick={onClose}>
        Close
      </button>
      {isLoading ? (
        <div>
          <h3>Loading</h3>
          <br />
          <img src='/spinner.svg' alt='spinner' height={200} />
        </div>
      ) : character && character.name ? (
        <>
          <h3>{character.name}</h3>
          <img src={character.image}></img>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
        </>
      ) : (
        <h3>No Character</h3>
      )}
    </div>
  );
}
