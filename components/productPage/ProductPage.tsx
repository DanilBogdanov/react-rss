import { Product } from '@/types/api';
import styles from './productPage.module.css';
import { useRouter } from 'next/router';
import { getLink } from '@/utils/appUtils';

type Props = {
  product: Product;
};

export default function ProductPage({ product }: Props) {
  const router = useRouter();

  const onClose = () => {
    const url = getLink(router);
    router.push(url);
  };

  return (
    <>
      <div
        className={styles['product-page__background']}
        onClick={onClose}
      ></div>
      <div className={styles['product-page']} data-testid='product-page'>
        <button
          className={styles['product-page__close']}
          type='button'
          onClick={onClose}
        >
          Close
        </button>
        {product.title && (
          <>
            <h3>{product.title}</h3>
            <img
              className={styles['product-page__img']}
              src={product.images[0]}
            ></img>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Brand: {product.brand}</p>
          </>
        )}
      </div>
    </>
  );
}
