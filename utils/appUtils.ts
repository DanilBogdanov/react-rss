import { PageLimit, ProductRequest, SearchContext } from '@/types/api';
import { DEFAULT_PAGE } from '@/types/constants';

export const getPageLimit = (limit?: string) => {
  if (limit) {
    if (+limit === PageLimit.L60) {
      return PageLimit.L60;
    } else if (+limit === PageLimit.L40) {
      return PageLimit.L40;
    }
  }

  return PageLimit.L20;
};

export const buildRequest = ({ query }: SearchContext): ProductRequest => {
  const q = query.q ?? '';
  const limit = getPageLimit(query.limit);
  const page = query.page ? +query.page : DEFAULT_PAGE;
  const skip = limit * (page - 1);
  const detailed = query.detailed ? query.detailed : null;

  return {
    q,
    limit,
    skip,
    detailed,
  };
};

export const getLink = ({ query }: SearchContext) => {
  const q = `q=${query.q ?? ''}`;
  const limit = query.limit ? `&limit=${query.limit}` : '';
  const page = query.page ? `&page=${query.page}` : '';

  return `/search?${q}${limit}${page}`;
};
