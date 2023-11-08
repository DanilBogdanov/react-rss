import { Link } from 'react-router-dom';

type PageLinkProps = {
  page: number;
  title: string | number;
  url: URL;
  isActive: boolean;
};

export default function PageLink({
  page,
  title,
  url,
  isActive = false,
}: PageLinkProps): JSX.Element {
  const pageUrl = new URL(url);
  if (page === 1) {
    pageUrl.searchParams.delete('page');
  } else {
    pageUrl.searchParams.set('page', page.toString());
  }

  return (
    <li>
      <Link
        className={`pagination__link${
          isActive ? ' pagination__link_active' : ''
        }`}
        to={`${pageUrl.pathname}${pageUrl.search}`}
      >
        {title}
      </Link>
    </li>
  );
}
