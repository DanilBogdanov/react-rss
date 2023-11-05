import { ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './pagination.css';

type PaginationProps = {
  count: number;
  limit: number;
  currentPage: number;
};

export default function Pagination({
  count,
  limit,
  currentPage,
}: PaginationProps): ReactElement {
  const navigate = useNavigate();
  const url = new URL(location.href);
  const pages = Math.ceil(count / limit);

  const getLink = (
    page: number,
    title: string | number,
    isActive: boolean = false
  ) => {
    const pageUrl = new URL(url);
    if (page === 1) {
      pageUrl.searchParams.delete('page');
    } else {
      pageUrl.searchParams.set('page', page.toString());
    }
    return (
      <li key={title}>
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
  };

  const getSpan = (text: string, key: string) => {
    return (
      <li key={key}>
        <span className={'pagination__link pagination__link_disabled'}>
          {text}
        </span>
      </li>
    );
  };

  const getLinks = () => {
    const prevLinks = [];
    const restLinks = [];
    const links = [];
    let startIdx = 1;
    let endIdx = pages;
    if (pages > 7) {
      let startExtra = 0;
      let endExtra = 0;
      if (currentPage > 4) {
        prevLinks.push(getLink(1, 1));
        prevLinks.push(getSpan('...', 'dotedPrev'));
        startIdx = currentPage - 1;
      } else {
        endExtra = 4 - currentPage;
      }

      if (pages - currentPage > 3) {
        endIdx = currentPage + 1;
        restLinks.push(getSpan('...', 'dotedNext'));
        restLinks.push(getLink(pages, pages));
      } else {
        startExtra = 3 - (pages - currentPage);
      }
      startIdx -= startExtra;
      endIdx += endExtra;
    }
    for (let i = startIdx; i <= endIdx; i += 1) {
      const isActive = i === currentPage;
      links.push(getLink(i, i, isActive));
    }

    const prevLink =
      currentPage > 1 ? getLink(currentPage - 1, '<') : getSpan('<', 'prev');
    const nextLink =
      currentPage < pages
        ? getLink(currentPage + 1, '>')
        : getSpan('>', 'next');
    return [prevLink, ...prevLinks, ...links, ...restLinks, nextLink];
  };

  function getOptions() {
    const values = [20, 40, 60];
    return values.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ));
  }

  function onChangePerPage(e: React.ChangeEvent<HTMLSelectElement>) {
    const limitUrl = new URL(url);
    limitUrl.searchParams.set('limit', e.target.value);
    limitUrl.searchParams.delete('page');
    navigate(`${limitUrl.pathname}${limitUrl.search}`);
  }

  return (
    <div className='pagination'>
      <nav>
        <ul className='pagination__links'>{getLinks()}</ul>
      </nav>
      <select
        className='pagination__select'
        onChange={onChangePerPage}
        value={limit}
      >
        {getOptions()}
      </select>
    </div>
  );
}
