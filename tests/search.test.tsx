import Index from '@/pages/search';
import { render, screen } from '@testing-library/react';
import { mockProducts } from './mockData';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('Search page test', () => {
  test('Search page is displayed.', async () => {
    render(
      <Index
        products={mockProducts.products}
        total={mockProducts.total}
        skip={mockProducts.skip}
        limit={mockProducts.limit}
      />
    );

    expect(screen.getByRole('heading', { level: 1 }).textContent).toEqual(
      'Dummy store'
    );
  });
});
