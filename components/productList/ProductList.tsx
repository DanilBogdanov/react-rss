import { Product, ProductsResponse } from '@/types/api';
import ProductCard from '../productCard/ProductCard';
import classes from './productList.module.css';
import Pagination from '../pagination/Pagination';

type Props = {
  products: ProductsResponse;
};

export default function ProductList({ products }: Props) {
  return (
    <div className={classes['product-list']}>
      {products?.products.length ? (
        <>
          <Pagination total={products.total} limit={products.limit} />
          <div className={classes['product-list__cards']}>
            {products.products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <h2>No Results</h2>
      )}
    </div>
  );
}
