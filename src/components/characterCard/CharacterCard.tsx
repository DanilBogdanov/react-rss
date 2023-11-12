import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/appUtils';
import { Character } from '@/types/api';
import './characterCard.css';

type CharacterListProps = {
  character: Character;
};

export default function CharacterCard({
  character,
}: CharacterListProps): JSX.Element {
  const navigate = useNavigate();

  function showCharacter(id: number) {
    const url = new URL(location.href);
    url.pathname = `search/character/${id}`;
    navigate(`${url.pathname}${url.search}`);
    scrollToTop();
  }

  return (
    <div
      className='character-card'
      onClick={(e) => {
        e.stopPropagation();
        showCharacter(character.id);
      }}
      data-testid='character-card'
    >
      <h4 className='character-card__title'>{character.name}</h4>
      <img src={character.image} alt={`${character.name}-img`} />
    </div>
  );
}
