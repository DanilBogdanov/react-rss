import styles from './pageLink.module.css';

type Props = {
  page: number;
  currentPage: number;
  url: string;
};

export default function PageLink({ page, currentPage, url }: Props) {
  const isActive = page === currentPage ? styles['page-link_active'] : '';
  const className = `${styles['page-link']} ${isActive}`;

  return (
    <li data-testid='page-link'>
      <a href={`${url}&page=${page}`} className={className}>
        {page}
      </a>
    </li>
  );
}
