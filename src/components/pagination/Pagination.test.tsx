import { render, screen } from '@testing-library/react';
import {
  mockCharacterResponse,
  mockCharacterRick,
} from '@/tests/mockData/characters';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '@/router/AppRouter';
import { api } from '@/api/api';
import { AppContextProvider } from '@/context/AppContext';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { scrollToTop } from '@/utils/appUtils';
import DisplayLocation from '@/tests/mockData/DisplayLocation';

jest.mock('@/api/api');
jest.mock('@/utils/appUtils');

describe('Pagination test', () => {
  const mockedApi = jest.mocked(api);
  const mockedScroll = jest.mocked(scrollToTop);

  beforeAll(() => {
    mockedApi.getCharacter.mockReturnValue(Promise.resolve(mockCharacterRick));
    mockedApi.getCharacters.mockReturnValue(
      Promise.resolve(mockCharacterResponse)
    );
    mockedScroll.mockImplementation(() => {});
  });

  test('Component updates URL query parameter when page changes.', async () => {
    const startPage = 2;
    await act(async () => {
      render(
        <MemoryRouter
          initialEntries={[`/search/?page=${startPage}&limit=20&query=`]}
        >
          <AppContextProvider>
            <AppRouter />
            <DisplayLocation />
          </AppContextProvider>
        </MemoryRouter>
      );
    });

    const linkToPrevPage = await screen.findAllByText(/</i);
    await userEvent.click(linkToPrevPage[0]);
    const currentPage = await screen.findByTestId('current-page');
    expect(currentPage.textContent).toEqual(`${startPage - 1}`);
  });
});
