import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContextProvider } from '@/context/AppContext';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { LSKEY_PREV_QUERY } from '@/types/constants';
import SearchBar from './SearchBar';

describe('SearchBar test', () => {
  const testLSValuePrev = 'prevTestValue';
  const testLSValueNew = 'testValueNew';

  beforeEach(async () => {
    localStorage.setItem(LSKEY_PREV_QUERY, testLSValuePrev);
    await act(async () => {
      render(
        <MemoryRouter>
          <AppContextProvider>
            <SearchBar />
          </AppContextProvider>
        </MemoryRouter>
      );
    });
  });

  test('Component retrieves the value from the local storage', () => {
    const searchInput = screen.getByRole('textbox');

    expect(searchInput).toHaveAttribute('value', testLSValuePrev);
  });

  test('Search button saves the entered value to the local storage', async () => {
    const searchInput = screen.getByRole('textbox');
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, testLSValueNew);
    const searchButton = screen.getByRole('button');
    await userEvent.click(searchButton);
    const currentLSValue = localStorage.getItem(LSKEY_PREV_QUERY);

    expect(currentLSValue).toEqual(testLSValueNew);
  });
});
