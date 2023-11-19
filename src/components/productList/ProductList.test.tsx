import 'whatwg-fetch';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import AppRouter from '@/router/AppRouter';
import { scrollToTop } from '@/utils/appUtils';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';

jest.mock('@/utils/appUtils');
const store = setupStore();
describe('CharacterList test', () => {
  const mockedScroll = jest.mocked(scrollToTop);

  beforeAll(() => {
    mockedScroll.mockImplementation(() => {});
  });

  test('Appropriate message is displayed if no cards are present', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/search?q=asdfsdf']}>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );
    });

    expect(await screen.findByRole('heading', { level: 4 })).toHaveTextContent(
      'No Results'
    );
  });
});
