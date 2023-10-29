import React from 'react';
import { Character } from '../../types/api';
import './characterCard.css';

type CharacterListProps = {
  character: Character;
};

export default class CharacterCard extends React.Component<CharacterListProps> {
  render() {
    return (
      <div className='character-card'>
        <h3>{this.props.character.name}</h3>
        <p>Species: {this.props.character.species}</p>
        <p>Sex: {this.props.character.gender}</p>
        <img src={this.props.character.image} />
      </div>
    );
  }
}
