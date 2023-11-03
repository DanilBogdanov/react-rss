import { Character } from '../../types/api';
import './characterCard.css';

type CharacterListProps = {
  character: Character;
};

export default function CharacterCard({
  character,
}: CharacterListProps): JSX.Element {
  return (
    <div className='character-card'>
      <h4 className='character-card__title'>{character.name}</h4>
      <img src={character.image} />
    </div>
  );
}
