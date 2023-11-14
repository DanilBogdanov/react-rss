import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { mockCharacterResponse } from '@/tests/mockData/characters';
import { AppContextProvider } from '@/context/AppContext';
import AppRouter from '@/router/AppRouter';
import { api } from '@/api/api';
import { scrollToTop } from '@/utils/appUtils';

jest.mock('@/api/api');
jest.mock('@/utils/appUtils');

describe('CharacterList test', () => {
  const mockedApi = jest.mocked(api);
  const mockedScroll = jest.mocked(scrollToTop);

  beforeAll(() => {
    mockedApi.getCharacters.mockReturnValue(
      Promise.resolve(mockCharacterResponse)
    );
    mockedScroll.mockImplementation(() => {});
  });

  test('Component renders the specified number of cards', async () => {
    mockedApi.getCharacters.mockReturnValue(
      Promise.resolve(mockCharacterResponse)
    );
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/search']}>
          <AppContextProvider>
            <AppRouter />
          </AppContextProvider>
        </MemoryRouter>
      );
    });

    const cards = await screen.findAllByTestId('character-card');

    expect(cards).toHaveLength(mockCharacterResponse.results.length);
  });

  test('Appropriate message is displayed if no cards are present', async () => {
    mockedApi.getCharacters.mockReturnValue(Promise.resolve(null));
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/search']}>
          <AppContextProvider>
            <AppRouter />
          </AppContextProvider>
        </MemoryRouter>
      );
    });

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'No Results'
    );
  });
});
