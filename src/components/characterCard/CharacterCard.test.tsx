import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppContextProvider } from '@/context/AppContext';
import AppRouter from '@/router/AppRouter';
import CharacterCard from './CharacterCard';
import { api } from '@/api/api';
import { scrollToTop } from '@/utils/appUtils';
import { mockCharacterRick } from '@/tests/mockData/characters';

jest.mock('@/api/api');
jest.mock('@/utils/appUtils');

describe('CharacterCard routing test', () => {
  const mockedApi = jest.mocked(api);
  const mockedScroll = jest.mocked(scrollToTop);

  beforeAll(() => {
    mockedApi.getCharacter.mockReturnValue(Promise.resolve(mockCharacterRick));
    mockedApi.getCharacters.mockReturnValue(
      Promise.resolve({ info: { count: 1 }, results: [mockCharacterRick] })
    );
    mockedScroll.mockImplementation(() => {});
  });

  test('Click on CharacterCard is opening CharacterPage', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <AppContextProvider>
            <AppRouter />
          </AppContextProvider>
        </MemoryRouter>
      );
    });

    const card = await screen.findByTestId('character-card');
    userEvent.click(card);
    const characterPage = await screen.findByTestId('character-page');

    expect(characterPage).toBeInTheDocument();
  });

  test('Click triggers an additional API call', async () => {
    expect(mockedApi.getCharacter).toHaveBeenCalledTimes(1);
  });
});

describe('CharacterCard renders the relevant card data', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacterRick} />
      </MemoryRouter>
    );
  });

  test('CharacterCard is presence', () => {
    expect(screen.getByTestId('character-card')).toBeInTheDocument();
  });

  test('CharacterCard show character name', () => {
    expect(screen.getByRole('heading', { level: 4 }).textContent).toEqual(
      mockCharacterRick.name
    );
  });

  test('CharacterCard show character img', () => {
    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', mockCharacterRick.image);
    expect(img).toHaveAttribute('alt', `${mockCharacterRick.name}-img`);
  });
});
