import { PageLimit } from '@/types/api';
import { getPageLimit, scrollToTop } from './appUtils';

const scrollToSpy = jest.fn();
global.scroll = scrollToSpy;

describe('AppUtils tests', () => {
  test('getPageLimit return value on existing limit', () => {
    expect(getPageLimit(60)).toEqual(PageLimit.l60);
    expect(getPageLimit(40)).toEqual(PageLimit.l40);
  });

  test('getPageLimit return default value on not correct limit', () => {
    expect(getPageLimit(0)).toEqual(PageLimit.l20);
    expect(getPageLimit(10)).toEqual(PageLimit.l20);
    expect(getPageLimit(30)).toEqual(PageLimit.l20);
    expect(getPageLimit(50)).toEqual(PageLimit.l20);
    expect(getPageLimit(70)).toEqual(PageLimit.l20);
    expect(getPageLimit(100)).toEqual(PageLimit.l20);
  });

  test('scrollToTop called scroll', () => {
    scrollToTop();
    expect(typeof scrollToTop).toEqual('function');
    expect(global.scroll).toHaveBeenCalled();
  });
});
