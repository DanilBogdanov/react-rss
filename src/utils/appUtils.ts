import { PageLimit } from '../types/api';

export function getPageLimit(limit: number) {
  if (limit === 60) {
    return PageLimit.l60;
  } else if (limit === 40) {
    return PageLimit.l40;
  }
  return PageLimit.l20;
}

export function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
