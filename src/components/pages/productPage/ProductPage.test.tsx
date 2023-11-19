import 'whatwg-fetch';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchPage from '@/components/pages/searchPage/searchPage';
import ProductPage from './ProductPage';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';

describe('CharacterCard routing test', () => {
  test('Loading indicator is displayed', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductPage />
        </MemoryRouter>
      </Provider>
    );
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  test('Detailed card component correctly displays the detailed card', async () => {
    const store = setupStore();
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/search/product/1']}>
            <Routes>
              <Route path='search/product/:id' element={<ProductPage />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      );
    });
    expect(await screen.findByText(/Price:/i)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/Description:/i)).toBeInTheDocument();
    expect(screen.getByText(/Brand:/i)).toBeInTheDocument();
  });

  test('Clicking the close button hides the component', async () => {
    const store = setupStore();
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/search/product/1']}>
            <Routes>
              <Route path='search' element={<SearchPage />} />
              <Route path='search/product/:id' element={<ProductPage />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      );
    });
    await userEvent.click(screen.getByRole('button'));

    expect(screen.queryByTestId('character-page')).not.toBeInTheDocument();
  });
});
