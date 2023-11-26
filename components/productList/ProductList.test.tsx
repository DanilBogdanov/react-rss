import { mockProducts, mockProductsEmpty } from '@/tests/mockData';
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

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

describe('ProductList test', () => {
  test('Appropriate message is displayed if no cards are present', async () => {
    render(<ProductList products={mockProductsEmpty} />);

    expect(await screen.findByRole('heading', { level: 2 })).toHaveTextContent(
      'No Results'
    );
  });

  test('Is displayed all cards', async () => {
    render(<ProductList products={mockProducts} />);

    expect(await screen.findAllByRole('heading', { level: 4 })).toHaveLength(
      mockProducts.products.length
    );
  });
});
