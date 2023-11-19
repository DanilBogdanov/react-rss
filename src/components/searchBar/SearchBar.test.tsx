import 'whatwg-fetch';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LSKEY_PREV_QUERY } from '@/types/constants';
import SearchBar from './SearchBar';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';

const testLSValuePrev = 'prevTestValue';
const testLSValueNew = 'testValueNew';
localStorage.setItem(LSKEY_PREV_QUERY, testLSValuePrev);
const store = setupStore();

describe('SearchBar test', () => {
  test('Search button saves the entered value to the local storage', async () => {
    localStorage.setItem(LSKEY_PREV_QUERY, testLSValuePrev);
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <SearchBar />
          </MemoryRouter>
        </Provider>
      );
    });

    const searchInput = screen.getByRole('textbox');
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, testLSValueNew);
    const searchButton = screen.getByRole('button');
    await userEvent.click(searchButton);
    const currentLSValue = localStorage.getItem(LSKEY_PREV_QUERY);

    expect(currentLSValue).toEqual(testLSValueNew);
  });
});
