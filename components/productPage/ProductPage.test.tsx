import { render, screen } from '@testing-library/react';
import ProductPage from './ProductPage';
import { mockProducts } from '@/tests/mockData';

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

describe('Product page test', () => {
  test('Detailed card component correctly displays the detailed card', async () => {
    render(<ProductPage product={mockProducts.products[0]} />);

    expect(screen.getByText(/Price:/i)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/Description:/i)).toBeInTheDocument();
    expect(screen.getByText(/Brand:/i)).toBeInTheDocument();
  });

  test('Clicking the close button hides the component', async () => {
    render(<ProductPage product={mockProducts.products[0]} />);

    expect(screen.getByText('Close')).toBeInTheDocument();
  });
});
