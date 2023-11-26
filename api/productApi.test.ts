import axios from 'axios';
import { mockProducts } from '@/tests/mockData';
import { PageLimit } from '@/types/api';
import { getProducts } from './productApi';

jest.mock('axios');

describe('Api test', () => {
  const mockedAxios = jest.mocked(axios);
  const productRequest = {
    q: '',
    page: 1,
    limit: PageLimit.L40,
    skip: 10,
    detailed: null,
  };
  const testProduct = mockProducts.products[0];

  test('getProduct test', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ data: testProduct }));
    const product = await getProducts(productRequest);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(product).toEqual(testProduct);
  });
});
