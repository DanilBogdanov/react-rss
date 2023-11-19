import 'whatwg-fetch';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const testProduct = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
    'https://i.dummyjson.com/data/products/1/3.jpg',
    'https://i.dummyjson.com/data/products/1/4.jpg',
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  ],
};

describe('CharacterCard renders the relevant card data', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ProductCard product={testProduct} />
      </MemoryRouter>
    );
  });

  test('ProductCard is presence', () => {
    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });

  test('ProductCard show product name', () => {
    expect(screen.getByRole('heading', { level: 4 }).textContent).toEqual(
      testProduct.title
    );
  });

  test('ProductCard show product img', () => {
    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', testProduct.images[0]);
    expect(img).toHaveAttribute('alt', `${testProduct.title}-img`);
  });
});
