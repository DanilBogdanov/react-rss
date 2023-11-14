import { PageLimit } from '../types/api';

export function getPageLimit(limit: number) {
  if (limit === 60) {
    return PageLimit.L60;
  } else if (limit === 40) {
    return PageLimit.L40;
  }

  return PageLimit.L20;
}

export function scrollToTop() {
  globalThis.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
