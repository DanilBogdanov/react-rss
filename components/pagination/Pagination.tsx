import { DEFAULT_PAGE } from '@/types/constants';
import { useRouter } from 'next/router';
import styles from './pagination.module.css';
import PageLink from './pageLink/PageLink';
import LimitSelect from './limitSelect/LimitSelect';

type Props = {
  total: number;
  limit: number;
};

export default function Pagination({ total, limit }: Props) {
  const router = useRouter();
  const url = `/search?q=${router.query.q ?? ''}`;
  const currentPage = +(router.query.page ?? DEFAULT_PAGE);
  const pagesCount = Math.ceil(total / limit);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className={styles.pagination} data-testid='pagination'>
      <nav>
        <ul className={styles['pagination__links']}>
          {pages.map((page) => (
            <PageLink
              key={page}
              page={page}
              url={`${url}&limit=${limit}`}
              currentPage={currentPage}
            />
          ))}
        </ul>
      </nav>
      <LimitSelect url={url} currentLimit={limit} />
    </div>
  );
}
