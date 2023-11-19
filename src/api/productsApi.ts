import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product, ProductRequest, ProductsResponse } from '@/types/api';

export const productsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    fetchProduct: build.query<Product, string>({
      query: (id: string) => ({
        url: `products/${id}`,
      }),
    }),
    fetchProducts: build.query<ProductsResponse, ProductRequest>({
      query: ({ limit, skip, q }: ProductRequest) => ({
        url: 'products/search',
        params: { q, limit, skip },
      }),
    }),
  }),
});

export const { useFetchProductQuery, useFetchProductsQuery } = productsApi;
