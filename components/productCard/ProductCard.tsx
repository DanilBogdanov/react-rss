import { Product } from '@/types/api';
import styles from './productCard.module.css';
import { useRouter } from 'next/router';

type ProductCartProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCartProps) {
  const router = useRouter();
  const url = `${router.asPath}&detailed=${product.id}`;

  return (
    <a href={url}>
      <div className={styles['product-card']} data-testid='product-card'>
        <h4 className={styles['product-card__title']}>{product.title}</h4>
        <img
          className={styles['product-card__img']}
          src={product.images[0]}
          alt={`${product.title}-img`}
        />
      </div>
    </a>
  );
}
