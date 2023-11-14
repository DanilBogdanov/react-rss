import { render, screen } from '@testing-library/react';
import { mockCharacterRick } from '@/tests/mockData/characters';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { api } from '@/api/api';
import { act } from 'react-dom/test-utils';
import CharacterPage from './CharacterPage';
import userEvent from '@testing-library/user-event';
import SearchPage from '../searchPage/searchPage';

jest.mock('@/api/api');

describe('CharacterCard routing test', () => {
  const mockedApi = jest.mocked(api);
  beforeEach(() => {
    mockedApi.getCharacter.mockReturnValue(Promise.resolve(mockCharacterRick));
    mockedApi.getCharacters.mockReturnValue(
      Promise.resolve({ info: { count: 1 }, results: [mockCharacterRick] })
    );
  });

  test('Loading indicator is displayed', () => {
    render(
      <MemoryRouter>
        <CharacterPage />
      </MemoryRouter>
    );
    const loader = screen.getByTestId('loader');

    expect(loader).toBeInTheDocument();
  });

  test('Detailed card component correctly displays the detailed card', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/search/character/1']}>
          <Routes>
            <Route path='search/character/:id' element={<CharacterPage />} />
          </Routes>
        </MemoryRouter>
      );
    });

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
    expect(screen.getByText(/Species:/i)).toBeInTheDocument();
    expect(screen.getByText(/Status:/i)).toBeInTheDocument();
  });

  test('Clicking the close button hides the component', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/search/character/1']}>
          <Routes>
            <Route path='search' element={<SearchPage />} />
            <Route path='search/character/:id' element={<CharacterPage />} />
          </Routes>
        </MemoryRouter>
      );
    });
    await userEvent.click(screen.getByRole('button'));

    expect(screen.queryByTestId('character-page')).not.toBeInTheDocument();
  });
});
