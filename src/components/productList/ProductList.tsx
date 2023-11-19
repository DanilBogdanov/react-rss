import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/productCard/ProductCard';
import Pagination from '@/components/pagination/Pagination';
import Loader from '@/components/loader/Loader';
import { getPageLimit } from '@/utils/appUtils';
import { PER_PAGE_DEFAULT } from '@/types/constants';
import { Product } from '@/types/api';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useFetchProductsQuery } from '@/api/productsApi';
import { querySlice } from '@/store/reducers/querySlice';
import './productList.css';

export default function ProductList(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const { search, perPage } = useAppSelector((state) => state.query);
  const { isListLoading } = useAppSelector((state) => state.products);
  const { setPerPage } = querySlice.actions;
  const { data: products } = useFetchProductsQuery({
    q: search,
    limit: perPage,
    skip: (page - 1) * perPage,
  });

  useEffect(() => {
    const limitParam = +(searchParams.get('limit') ?? PER_PAGE_DEFAULT);
    dispatch(setPerPage(getPageLimit(limitParam)));
    const pageParam = +(searchParams.get('page') ?? 1);
    setPage(pageParam);
  }, [dispatch, searchParams, setPerPage]);

  return (
    <div className='product-list'>
      {isListLoading && <Loader />}
      {!isListLoading && products?.products && (
        <>
          <Pagination
            limit={perPage}
            count={products.total}
            currentPage={page}
          />
          <div className='product-list__cards'>
            {products.products.map((item: Product) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
          <Pagination
            limit={perPage}
            count={products.total}
            currentPage={page}
          />
        </>
      )}
      {!isListLoading && !products?.products && <h3>No Results</h3>}
    </div>
  );
}
