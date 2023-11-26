import { Context } from 'vm';

export interface ProductRequest {
  q: string;
  skip: number;
  limit: PageLimit;
  detailed: string | null;
}

export enum PageLimit {
  L20 = 20,
  L40 = 40,
  L60 = 60,
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  detailed?: Product;
}

export interface SearchContext extends Context {
  query: {
    q?: string;
    limit?: string;
    page?: string;
    detailed?: string;
  };
}
