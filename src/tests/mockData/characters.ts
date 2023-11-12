import { Character, CharacterResponse } from '@/types/api';

export const mockCharacterRick: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  url: 'https://rickandmortyapi.com/api/character/1',
};

export const mockBadCharacterResponse = {
  error: 'Some Error',
};

export const mockCharacterResponse: CharacterResponse = {
  info: {
    count: 826,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',

      url: 'https://rickandmortyapi.com/api/character/1',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',

      url: 'https://rickandmortyapi.com/api/character/2',
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',

      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',

      url: 'https://rickandmortyapi.com/api/character/3',
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',

      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',

      url: 'https://rickandmortyapi.com/api/character/4',
    },
    {
      id: 5,
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',

      url: 'https://rickandmortyapi.com/api/character/5',
    },
    {
      id: 6,
      name: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Alien',
      gender: 'Female',

      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
      url: 'https://rickandmortyapi.com/api/character/6',
    },
    {
      id: 7,
      name: 'Abradolf Lincler',
      status: 'unknown',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',

      url: 'https://rickandmortyapi.com/api/character/7',
    },
    {
      id: 8,
      name: 'Adjudicator Rick',
      status: 'Dead',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
      url: 'https://rickandmortyapi.com/api/character/8',
    },
    {
      id: 9,
      name: 'Agency Director',
      status: 'Dead',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
      url: 'https://rickandmortyapi.com/api/character/9',
    },
    {
      id: 10,
      name: 'Alan Rails',
      status: 'Dead',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
      url: 'https://rickandmortyapi.com/api/character/10',
    },
    {
      id: 11,
      name: 'Albert Einstein',
      status: 'Dead',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
      url: 'https://rickandmortyapi.com/api/character/11',
    },
    {
      id: 12,
      name: 'Alexander',
      status: 'Dead',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
      url: 'https://rickandmortyapi.com/api/character/12',
    },
    {
      id: 13,
      name: 'Alien Googah',
      status: 'unknown',
      species: 'Alien',
      gender: 'unknown',

      image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
      url: 'https://rickandmortyapi.com/api/character/13',
    },
    {
      id: 14,
      name: 'Alien Morty',
      status: 'unknown',
      species: 'Alien',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
      url: 'https://rickandmortyapi.com/api/character/14',
    },
    {
      id: 15,
      name: 'Alien Rick',
      status: 'unknown',
      species: 'Alien',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
      url: 'https://rickandmortyapi.com/api/character/15',
    },
    {
      id: 16,
      name: 'Amish Cyborg',
      status: 'Dead',
      species: 'Alien',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
      url: 'https://rickandmortyapi.com/api/character/16',
    },
    {
      id: 17,
      name: 'Annie',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',

      image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
      url: 'https://rickandmortyapi.com/api/character/17',
    },
    {
      id: 18,
      name: 'Antenna Morty',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',

      url: 'https://rickandmortyapi.com/api/character/18',
    },
    {
      id: 19,
      name: 'Antenna Rick',
      status: 'unknown',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
      url: 'https://rickandmortyapi.com/api/character/19',
    },
    {
      id: 20,
      name: 'Ants in my Eyes Johnson',
      status: 'unknown',
      species: 'Human',
      gender: 'Male',

      image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
      url: 'https://rickandmortyapi.com/api/character/20',
    },
  ],
};
