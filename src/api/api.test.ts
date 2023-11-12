import {
  mockBadCharacterResponse,
  mockCharacterResponse,
  mockCharacterRick,
} from '@/tests/mockData/characters';
import axios from 'axios';
import { api } from './api';
import { PageLimit } from '@/types/api';

jest.mock('axios');

describe('Api test', () => {
  const mockedAxios = jest.mocked(axios);
  const characterRequest = {
    name: '',
    page: 1,
    limit: PageLimit.l40,
  };

  test('getCharacter test', async () => {
    mockedAxios.get.mockReturnValue(
      Promise.resolve({ data: mockCharacterRick })
    );
    const character = await api.getCharacter(1);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(character).toEqual(mockCharacterRick);
  });

  test('getCharacters test', async () => {
    mockedAxios.get.mockReturnValue(
      Promise.resolve({ data: mockCharacterResponse })
    );
    const character = await api.getCharacters(characterRequest);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(character).toEqual(mockCharacterResponse);
  });

  test('getCharacters with bad response test', async () => {
    mockedAxios.get.mockReturnValue(
      Promise.resolve({ data: mockBadCharacterResponse })
    );
    const character = await api.getCharacters(characterRequest);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(character).toBeNull();
  });
});
