import { useNavigate, useParams } from 'react-router-dom';
import Loader from '@/components/loader/Loader';
import { useFetchProductQuery } from '@/api/productsApi';
import { productsSlice } from '@/store/reducers/productsSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import './productPage.css';

type Params = {
  id: string;
};

export default function ProductPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams<Params>();
  const id = params.id ?? '0';
  const navigate = useNavigate();
  const { data: product, isFetching } = useFetchProductQuery(id);
  const { isDetailLoading } = useAppSelector((state) => state.products);
  const { setIsDetailLoading } = productsSlice.actions;
  dispatch(setIsDetailLoading(isFetching));

  function onClose() {
    const url = new URL(location.href);
    url.pathname = 'search';
    navigate(`${url.pathname}${url.search}`);
  }

  return (
    <div className='product-page' data-testid='product-page'>
      <button className='product-page__close' type='button' onClick={onClose}>
        Close
      </button>
      {isFetching && <Loader />}
      {!isDetailLoading && product?.title && (
        <>
          <h3>{product.title}</h3>
          <img className='product-page__img' src={product.images[0]}></img>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Brand: {product.brand}</p>
        </>
      )}
      {!isDetailLoading && !product?.title && <h3>No Product</h3>}
    </div>
  );
}
