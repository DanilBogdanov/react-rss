import { PageLimit } from '../types/api';

export function getPageLimit(limit: number) {
  if (limit === 60) {
    return PageLimit.l60;
  } else if (limit === 40) {
    return PageLimit.l40;
  }
  return PageLimit.l20;
}
