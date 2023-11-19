import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '@/utils/appUtils';
import './productCard.css';
import { Product } from '@/types/api';

type ProductCartProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCartProps): JSX.Element {
  const navigate = useNavigate();

  function showProduct(id: number) {
    const url = new URL(location.href);
    url.pathname = `search/product/${id}`;
    navigate(`${url.pathname}${url.search}`);
    scrollToTop();
  }

  return (
    <div
      className='product-card'
      onClick={(e) => {
        e.stopPropagation();
        showProduct(product.id);
      }}
      data-testid='product-card'
    >
      <h4 className='product-card__title'>{product.title}</h4>
      <img src={product.images[0]} alt={`${product.title}-img`} />
    </div>
  );
}
