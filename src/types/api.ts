export interface ProductRequest {
  q: string;
  skip: number;
  limit: PageLimit;
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
}
