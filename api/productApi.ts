import { Product, ProductRequest, ProductsResponse } from '@/types/api';
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';
const PRODUCT_PATH = `${BASE_URL}/products/`;
const PRODUCTS_PATH = `${BASE_URL}/products/search/`;

export const getProducts = async ({
  q,
  limit,
  skip,
  detailed,
}: ProductRequest): Promise<ProductsResponse> => {
  const response = await fetchProducts(q, limit, skip);

  if (detailed) {
    response.detailed = await fetchProduct(detailed);
  }

  response.limit = limit;

  return response;
};

const fetchProducts = async (
  q: string,
  limit: number,
  skip: number
): Promise<ProductsResponse> => {
  const { data } = await axios.get<ProductsResponse>(PRODUCTS_PATH, {
    params: { q, limit, skip },
  });

  return data;
};

const fetchProduct = async (id: string): Promise<Product> => {
  const url = `${PRODUCT_PATH}${id}`;
  const { data } = await axios.get<Product>(url);

  return data;
};
