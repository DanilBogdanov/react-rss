import 'whatwg-fetch';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import DisplayLocation from '@/tests/mockData/DisplayLocation';
import AppRouter from '@/router/AppRouter';
import { scrollToTop } from '@/utils/appUtils';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';
import Pagination from './Pagination';

jest.mock('@/utils/appUtils');

describe('Pagination test', () => {
  const mockedScroll = jest.mocked(scrollToTop);

  beforeAll(() => {
    mockedScroll.mockImplementation(() => {});
  });

  test('Component updates URL query parameter when page changes.', async () => {
    const startPage = 2;
    await act(async () => {
      const store = setupStore();
      render(
        <Provider store={store}>
          <MemoryRouter
            initialEntries={[`/search/?page=${startPage}&limit=20&query=`]}
          >
            <AppRouter />
            <Pagination count={100} limit={20} currentPage={1} />
            <DisplayLocation />
          </MemoryRouter>
        </Provider>
      );
    });
    const linkToPrevPage = await screen.findAllByText(/</i);
    await userEvent.click(linkToPrevPage[0]);
    const currentPage = await screen.findByTestId('current-page');

    expect(currentPage.textContent).toEqual(`${startPage}`);
  });
});
