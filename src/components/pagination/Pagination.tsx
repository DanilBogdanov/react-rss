import { ReactElement } from 'react';
import LimitSelect from './LimitSelect';
import PageLink from './PageLink';
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
  const url = new URL(location.href);
  const pages = Math.ceil(count / limit);

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
        prevLinks.push(
          <PageLink key={1} page={1} title={1} url={url} isActive={false} />
        );
        prevLinks.push(getSpan('...', 'dotedPrev'));
        startIdx = currentPage - 1;
      } else {
        endExtra = 4 - currentPage;
      }

      if (pages - currentPage > 3) {
        endIdx = currentPage + 1;
        restLinks.push(getSpan('...', 'dotedNext'));
        restLinks.push(
          <PageLink
            key={pages}
            page={pages}
            title={pages}
            url={url}
            isActive={false}
          />
        );
      } else {
        startExtra = 3 - (pages - currentPage);
      }

      startIdx -= startExtra;
      endIdx += endExtra;
    }

    for (let i = startIdx; i <= endIdx; i += 1) {
      const isActive = i === currentPage;
      links.push(
        <PageLink key={i} page={i} title={i} url={url} isActive={isActive} />
      );
    }

    const prevLink =
      currentPage > 1 ? (
        <PageLink
          key='<'
          page={currentPage - 1}
          title='<'
          url={url}
          isActive={false}
        />
      ) : (
        getSpan('<', 'prev')
      );

    const nextLink =
      currentPage < pages ? (
        <PageLink
          key='>'
          page={currentPage + 1}
          title='>'
          url={url}
          isActive={false}
        />
      ) : (
        getSpan('>', 'next')
      );

    return [prevLink, ...prevLinks, ...links, ...restLinks, nextLink];
  };

  return (
    <div className='pagination'>
      <nav>
        <ul className='pagination__links'>{getLinks()}</ul>
      </nav>
      <LimitSelect url={url} currentLimit={limit} />
    </div>
  );
}
